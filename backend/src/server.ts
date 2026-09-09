import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
// import type { AuthenticatedRequest } from "./authenticate";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const app = express();
const prisma = new PrismaClient();

const PORT = Number(process.env.PORT) || 5000;
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in .env");
}

const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());


// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

type AuthRequest = Request & {
  user?: {
    id: string;
    email: string;
    role: "DEVELOPER" | "INDUSTRY" | "ADMIN";
  };
};


// ─────────────────────────────────────────────
// HEALTH CHECK
// ─────────────────────────────────────────────

app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "HonorCode backend is running!",
  });
});


// ─────────────────────────────────────────────
// REGISTER
// ─────────────────────────────────────────────

app.post("/register", async (req: Request, res: Response) => {
  try {
    const {
      email,
      password,
      role,

      // Developer fields
      firstName,
      lastName,
      phoneNumber,
      location,
      bio,
      githubUrl,
      linkedinUrl,
      portfolioUrl,

      // Industry fields
      companyName,
      website,
      description,
      industry,
      contactName,
    } = req.body;


    // ─────────────────────────────────────────
    // BASIC VALIDATION
    // ─────────────────────────────────────────

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Email, password and role are required.",
      });
    }

    if (role !== "DEVELOPER" && role !== "INDUSTRY") {
      return res.status(400).json({
        message: "Invalid registration role.",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long.",
      });
    }


    // ─────────────────────────────────────────
    // CHECK EXISTING USER
    // ─────────────────────────────────────────

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (existingUser) {
      return res.status(409).json({
        message: "An account with this email already exists.",
      });
    }


    // ─────────────────────────────────────────
    // HASH PASSWORD
    // ─────────────────────────────────────────

    const hashedPassword = await bcrypt.hash(password, 12);


    // ─────────────────────────────────────────
    // CREATE DEVELOPER
    // ─────────────────────────────────────────

    if (role === "DEVELOPER") {

      if (!firstName || !lastName) {
        return res.status(400).json({
          message: "First name and last name are required.",
        });
      }

      const user = await prisma.user.create({
        data: {
          email: email.toLowerCase(),
          password: hashedPassword,
          role: "DEVELOPER",

          developerProfile: {
            create: {
              firstName,
              lastName,
              phoneNumber,
              location,
              bio,
              githubUrl,
              linkedinUrl,
              portfolioUrl,
            },
          },
        },

        include: {
          developerProfile: true,
        },
      });

      return res.status(201).json({
        message: "Developer account created successfully.",

        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          status: user.status,
          emailVerified: user.emailVerified,
          developerProfile: user.developerProfile,
        },
      });
    }


    // ─────────────────────────────────────────
    // CREATE INDUSTRY
    // ─────────────────────────────────────────

    if (role === "INDUSTRY") {

      if (!companyName) {
        return res.status(400).json({
          message: "Company name is required.",
        });
      }

      const user = await prisma.user.create({
        data: {
          email: email.toLowerCase(),
          password: hashedPassword,
          role: "INDUSTRY",

          industryProfile: {
            create: {
              companyName,
              website,
              description,
              industry,
              location,
              contactName,
              phoneNumber,
            },
          },
        },

        include: {
          industryProfile: true,
        },
      });

      return res.status(201).json({
        message: "Industry account created successfully.",

        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          status: user.status,
          emailVerified: user.emailVerified,
          industryProfile: user.industryProfile,
        },
      });
    }

  } catch (error) {

    console.error("Registration error:", error);

    return res.status(500).json({
      message: "Something went wrong while creating the account.",
    });
  }
});


// ─────────────────────────────────────────────
// SIGN IN
// ─────────────────────────────────────────────

app.post("/signin", async (req: Request, res: Response) => {
  try {

    const { email, password } = req.body;


    // ─────────────────────────────────────────
    // VALIDATION
    // ─────────────────────────────────────────

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }


    // ─────────────────────────────────────────
    // FIND USER
    // ─────────────────────────────────────────

    const user = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }


    // ─────────────────────────────────────────
    // CHECK ACCOUNT STATUS
    // ─────────────────────────────────────────

    if (user.status === "SUSPENDED") {
      return res.status(403).json({
        message: "Your account has been suspended.",
      });
    }


    // ─────────────────────────────────────────
    // COMPARE PASSWORD
    // ─────────────────────────────────────────

    const passwordMatches = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatches) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }


    // ─────────────────────────────────────────
    // UPDATE LAST LOGIN
    // ─────────────────────────────────────────

    await prisma.user.update({
      where: {
        id: user.id,
      },

      data: {
        lastLoginAt: new Date(),
        status: "ACTIVE",
      },
    });


    // ─────────────────────────────────────────
    // CREATE JWT
    // ─────────────────────────────────────────

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );


    // ─────────────────────────────────────────
    // RESPONSE
    // ─────────────────────────────────────────

    return res.status(200).json({
      message: "Signed in successfully.",

      token,

      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        status: "ACTIVE",
        emailVerified: user.emailVerified,
      },
    });

  } catch (error) {

    console.error("Sign in error:", error);

    return res.status(500).json({
      message: "Something went wrong while signing in.",
    });
  }
});


// ─────────────────────────────────────────────
// AUTHENTICATION MIDDLEWARE
// ─────────────────────────────────────────────

const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {

  const authorization = req.headers.authorization;


  // No authorization header
  if (!authorization) {
    return res.status(401).json({
      message: "Authentication required.",
    });
  }


  // Expected:
  //
  // Authorization: Bearer <token>

  const [scheme, token] = authorization.split(" ");


  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({
      message: "Invalid authorization format.",
    });
  }


  try {

    const decoded = jwt.verify(
      token,
      JWT_SECRET
    ) as {
      userId: string;
      email: string;
      role: "DEVELOPER" | "INDUSTRY" | "ADMIN";
    };


    req.user = {
      id: decoded.userId,
      email: decoded.email,
      role: decoded.role,
    };


    next();

  } catch (error) {

    return res.status(401).json({
      message: "Invalid or expired token.",
    });
  }
};


// ─────────────────────────────────────────────
// GET CURRENT USER
// ─────────────────────────────────────────────

app.get(
  "/me",
  authenticate,
  async (req: AuthRequest, res: Response) => {

    try {

      const user = await prisma.user.findUnique({
        where: {
          id: req.user!.id,
        },

        include: {
          developerProfile: true,
          industryProfile: true,
        },
      });


      if (!user) {
        return res.status(404).json({
          message: "User not found.",
        });
      }


      return res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          status: user.status,
          emailVerified: user.emailVerified,
          lastLoginAt: user.lastLoginAt,

          developerProfile: user.developerProfile,
          industryProfile: user.industryProfile,
        },
      });

    } catch (error) {

      console.error("Get current user error:", error);

      return res.status(500).json({
        message: "Something went wrong.",
      });
    }
  }
);


// ─────────────────────────────────────────────
// START SERVER
// ─────────────────────────────────────────────

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 HonorCode backend running on port ${PORT}`);
});