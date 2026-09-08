import express from "express";
import cors from "cors";
import { type Request, type Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  console.log("Hello world this is the backend page");
  res.json({ message: 'Hello world!' });
});

app.listen(5000, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${5000}`);
});