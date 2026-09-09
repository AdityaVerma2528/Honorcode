"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  User,
  BriefcaseBusiness,
} from "lucide-react";
import axios from "axios";
import { API_URL } from "@/lib/api";
import { useRouter } from "next/navigation";

import { C } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/landing/logo";

type AccountType = "DEVELOPER" | "INDUSTRY";

interface SigninForm {
  email: string;
  password: string;
}

interface SigninResponse {
  message: string;
  token: string;
  user: {
    id: string;
    email: string;
    role: "DEVELOPER" | "INDUSTRY" | "ADMIN";
    status: string;
    emailVerified: boolean;
  };
}

export function SigninPage() {
  const router = useRouter();

  const [accountType, setAccountType] =
    useState<AccountType>("DEVELOPER");

  const [form, setForm] = useState<SigninForm>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const update =
    (key: keyof SigninForm) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));

      setError("");
    };

  const handleSignin = async () => {
    if (!form.email || !form.password) {
      setError("Email and password are required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post<SigninResponse>(
        `${API_URL}/signin`,
        {
          email: form.email.trim().toLowerCase(),
          password: form.password,
        },
        {
          withCredentials: true,
        }
      );

      const { token, user } = response.data;

      // Make sure the selected account type matches
      // the actual role returned by the backend.
      if (
        accountType !== user.role &&
        user.role !== "ADMIN"
      ) {
        setError(
          `This account is registered as ${user.role.toLowerCase()}, not ${accountType.toLowerCase()}.`
        );

        setLoading(false);
        return;
      }

      // Store the JWT for now.
      // We can move this to an HttpOnly cookie later
      // for a more secure production setup.
      localStorage.setItem("honorcode_token", token);

      localStorage.setItem(
        "honorcode_user",
        JSON.stringify(user)
      );

      // Redirect according to the actual backend role.
      if (user.role === "DEVELOPER") {
        router.push("/dashboard");
      } else if (user.role === "INDUSTRY") {
        router.push("/industry/dashboard");
      } else {
        router.push("/admin");
      }
    } catch (error) {
      console.error("Sign in error:", error);

      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            "Unable to sign in. Please check your credentials."
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: 10,
    border: `1.5px solid ${C.border}`,
    fontSize: 14,
    color: C.text,
    background: "#fff",
    outline: "none",
    transition: "border 0.15s",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          background: "#fff",
          borderBottom: `1px solid ${C.border}`,
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo />

        <button
          type="button"
          onClick={() => {
            router.push("/");
          }}
          style={{
            background: "none",
            border: "none",
            fontSize: 13,
            color: C.muted,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <ChevronLeft size={15} />
          Back to Home
        </button>
      </nav>

      {/* Main */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 24px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 480,
          }}
        >
          {/* Heading */}
          <div
            style={{
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background:
                  accountType === "DEVELOPER"
                    ? C.purpleXL
                    : C.blueL,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              {accountType === "DEVELOPER" ? (
                <User size={26} color={C.purple} />
              ) : (
                <BriefcaseBusiness
                  size={26}
                  color={C.blue}
                />
              )}
            </div>

            <h1
              style={{
                fontSize: 26,
                fontWeight: 800,
                color: C.text,
                letterSpacing: "-0.03em",
                marginBottom: 6,
              }}
            >
              Welcome back
            </h1>

            <p
              style={{
                fontSize: 14,
                color: C.muted,
              }}
            >
              Sign in to your HonorCode account
            </p>
          </div>

          <Card
            style={{
              padding: 28,
            }}
          >
            {/* Account Type */}
            <div
              style={{
                marginBottom: 24,
              }}
            >
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.textMid,
                  marginBottom: 8,
                }}
              >
                Sign in as
              </label>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                {/* Developer */}
                <button
                  type="button"
                  onClick={() =>
                    setAccountType("DEVELOPER")
                  }
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "11px 10px",
                    borderRadius: 10,
                    border:
                      accountType === "DEVELOPER"
                        ? `1.5px solid ${C.purple}`
                        : `1.5px solid ${C.border}`,
                    background:
                      accountType === "DEVELOPER"
                        ? C.purpleXL
                        : "#fff",
                    color:
                      accountType === "DEVELOPER"
                        ? C.purple
                        : C.textMid,
                    fontSize: 13,
                    fontWeight:
                      accountType === "DEVELOPER"
                        ? 700
                        : 600,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  <User size={16} />
                  Developer
                </button>

                {/* Industry */}
                <button
                  type="button"
                  onClick={() =>
                    setAccountType("INDUSTRY")
                  }
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "11px 10px",
                    borderRadius: 10,
                    border:
                      accountType === "INDUSTRY"
                        ? `1.5px solid ${C.blue}`
                        : `1.5px solid ${C.border}`,
                    background:
                      accountType === "INDUSTRY"
                        ? C.blueL
                        : "#fff",
                    color:
                      accountType === "INDUSTRY"
                        ? C.blue
                        : C.textMid,
                    fontSize: 13,
                    fontWeight:
                      accountType === "INDUSTRY"
                        ? 700
                        : 600,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  <BriefcaseBusiness size={16} />
                  Industry
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div
                style={{
                  marginBottom: 20,
                  padding: "11px 13px",
                  borderRadius: 10,
                  background: "#FEF2F2",
                  border: "1px solid #FECACA",
                  color: "#DC2626",
                  fontSize: 13,
                  lineHeight: 1.5,
                }}
              >
                {error}
              </div>
            )}

            {/* Form */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              {/* Email */}
              <div
                style={{
                  gridColumn: "span 2",
                }}
              >
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: C.textMid,
                    marginBottom: 6,
                  }}
                >
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder={
                    accountType === "DEVELOPER"
                      ? "developer@example.com"
                      : "you@company.com"
                  }
                  value={form.email}
                  onChange={update("email")}
                  style={inputStyle}
                  autoComplete="email"
                />
              </div>

              {/* Password */}
              <div
                style={{
                  gridColumn: "span 2",
                }}
              >
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: C.textMid,
                    marginBottom: 6,
                  }}
                >
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={update("password")}
                  style={inputStyle}
                  autoComplete="current-password"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSignin();
                    }
                  }}
                />
              </div>
            </div>

            {/* Submit */}
            <div
              style={{
                marginTop: 20,
              }}
            >
              <button
                type="button"
                disabled={loading}
                onClick={handleSignin}
              >
                {loading ? "Signing in..." : "Sign in"}

                {!loading && <ArrowRight size={16} />}
              </button>
            </div>

            <p
              style={{
                textAlign: "center",
                fontSize: 12,
                color: C.muted,
                marginTop: 16,
              }}
            >
              By signing in, you agree to our Terms of
              Service and Privacy Policy.
            </p>
          </Card>

          {/* Register */}
          <p
            style={{
              textAlign: "center",
              fontSize: 13,
              color: C.muted,
              marginTop: 16,
            }}
          >
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={() => {
                router.push("/register");
              }}
              style={{
                background: "none",
                border: "none",
                color: C.purple,
                fontWeight: 600,
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}