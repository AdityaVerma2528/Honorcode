"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  GraduationCap,
  Mail,
  Lock,
  User,
  Globe,
} from "lucide-react";

import { C } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/landing/logo";

type AccountType = "Developer" | "industry" | null;

interface ButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
}

export default function RegisterPage() {
  const [accountType, setAccountType] = useState<AccountType>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
    course: "",
    company: "",
    website: "",
  });

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FAFBFF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          height: 68,
          background: "#fff",
          borderBottom: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <Logo />
          </Link>

          <div
            style={{
              fontSize: 14,
              color: C.muted,
            }}
          >
            Already have an account?{" "}
            <Link
              href="/login"
              style={{
                color: C.purple,
                fontWeight: 700,
              }}
            >
              Sign in
            </Link>
          </div>
        </div>
      </nav>

      {/* Main */}
      <section
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          padding: "56px 24px 80px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 920,
          }}
        >
          {/* Back */}
          {accountType && (
            <button
              onClick={() => setAccountType(null)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                background: "none",
                border: "none",
                color: C.muted,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                marginBottom: 24,
                padding: 0,
              }}
            >
              <ArrowLeft size={16} />
              Change account type
            </button>
          )}

          {/* Heading */}
          <div
            style={{
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 13px",
                borderRadius: 999,
                background: C.purpleXL,
                color: C.purple,
                fontSize: 12,
                fontWeight: 700,
                marginBottom: 18,
              }}
            >
              <CheckCircle2 size={14} />
              Build your future with HonorCode
            </div>

            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 46px)",
                fontWeight: 800,
                color: C.text,
                letterSpacing: "-0.04em",
                margin: "0 0 12px",
              }}
            >
              {accountType
                ? accountType === "Developer"
                  ? "Create your Developer account"
                  : "Create your industry account"
                : "Join HonorCode"}
            </h1>

            <p
              style={{
                maxWidth: 560,
                margin: "0 auto",
                fontSize: 16,
                color: C.muted,
                lineHeight: 1.7,
              }}
            >
              {accountType
                ? accountType === "Developer"
                  ? "Build your skill profile, take assessments and discover opportunities."
                  : "Discover skilled talent and connect with Developers for internships and hiring."
                : "Choose how you want to use the HonorCode platform."}
            </p>
          </div>

          {/* Account Type Selection */}
          {!accountType && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
                maxWidth: 720,
                margin: "0 auto",
              }}
            >
              {/* Developer */}
              <button
                onClick={() => setAccountType("Developer")}
                style={{
                  textAlign: "left",
                  border: `1px solid ${C.border}`,
                  borderRadius: 20,
                  background: "#fff",
                  padding: 28,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 16,
                    background: C.purpleXL,
                    color: C.purple,
                    display: "grid",
                    placeItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <GraduationCap size={26} />
                </div>

                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: C.text,
                    marginBottom: 8,
                  }}
                >
                  I&apos;m a Developer
                </h2>

                <p
                  style={{
                    fontSize: 14,
                    color: C.muted,
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  Assess your skills, track your growth and discover
                  internships and career opportunities.
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: C.purple,
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  Create Developer Account
                  <ArrowRight size={15} />
                </div>
              </button>

              {/* Industry */}
              <button
                onClick={() => setAccountType("industry")}
                style={{
                  textAlign: "left",
                  border: `1px solid ${C.border}`,
                  borderRadius: 20,
                  background: "#fff",
                  padding: 28,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 16,
                    background: C.blueL,
                    color: C.blue,
                    display: "grid",
                    placeItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <Building2 size={26} />
                </div>

                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: C.text,
                    marginBottom: 8,
                  }}
                >
                  I&apos;m from Industry
                </h2>

                <p
                  style={{
                    fontSize: 14,
                    color: C.muted,
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  Find skilled Developers, post opportunities and connect
                  with emerging talent.
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: C.blue,
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  Create Industry Account
                  <ArrowRight size={15} />
                </div>
              </button>
            </div>
          )}

          {/* Registration Form */}
          {accountType && (
            <Card
              style={{
                maxWidth: 600,
                margin: "0 auto",
                padding: "32px",
              }}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  console.log({
                    accountType,
                    ...form,
                  });

                  alert(
                    "Demo registration successful! Backend integration will be added later."
                  );
                }}
              >
                {/* Name */}
                <div style={{ marginBottom: 20 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 700,
                      color: C.text,
                      marginBottom: 8,
                    }}
                  >
                    {accountType === "Developer"
                      ? "Full Name"
                      : "Contact Person"}
                  </label>

                  <div style={{ position: "relative" }}>
                    <User
                      size={17}
                      style={{
                        position: "absolute",
                        left: 14,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: C.muted,
                      }}
                    />

                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        updateField("name", e.target.value)
                      }
                      placeholder={
                        accountType === "Developer"
                          ? "Aditya Verma"
                          : "Your full name"
                      }
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Email */}
                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>
                    {accountType === "Developer"
                      ? "Email Address"
                      : "Work Email"}
                  </label>

                  <div style={{ position: "relative" }}>
                    <Mail
                      size={17}
                      style={iconStyle}
                    />

                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        updateField("email", e.target.value)
                      }
                      placeholder={
                        accountType === "Developer"
                          ? "Developer@example.com"
                          : "you@company.com"
                      }
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Developer Fields */}
                {accountType === "Developer" && (
                  <>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: 16,
                        marginBottom: 20,
                      }}
                    >
                      <div>
                        <label style={labelStyle}>
                          College / University
                        </label>

                        <input
                          required
                          value={form.college}
                          onChange={(e) =>
                            updateField(
                              "college",
                              e.target.value
                            )
                          }
                          placeholder="Your college"
                          style={plainInputStyle}
                        />
                      </div>

                      <div>
                        <label style={labelStyle}>
                          Course
                        </label>

                        <input
                          required
                          value={form.course}
                          onChange={(e) =>
                            updateField(
                              "course",
                              e.target.value
                            )
                          }
                          placeholder="BCA, B.Tech, MCA..."
                          style={plainInputStyle}
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Industry Fields */}
                {accountType === "industry" && (
                  <div style={{ marginBottom: 20 }}>
                    <label style={labelStyle}>
                      Company Name
                    </label>

                    <div style={{ position: "relative" }}>
                      <BriefcaseBusiness
                        size={17}
                        style={iconStyle}
                      />

                      <input
                        required
                        value={form.company}
                        onChange={(e) =>
                          updateField(
                            "company",
                            e.target.value
                          )
                        }
                        placeholder="Company name"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                )}

                {/* Website for Industry */}
                {accountType === "industry" && (
                  <div style={{ marginBottom: 20 }}>
                    <label style={labelStyle}>
                      Company Website{" "}
                      <span
                        style={{
                          fontWeight: 500,
                          color: C.muted,
                        }}
                      >
                        (Optional)
                      </span>
                    </label>

                    <div style={{ position: "relative" }}>
                      <Globe
                        size={17}
                        style={iconStyle}
                      />

                      <input
                        type="url"
                        value={form.website}
                        onChange={(e) =>
                          updateField(
                            "website",
                            e.target.value
                          )
                        }
                        placeholder="https://company.com"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                )}

                {/* Password */}
                <div style={{ marginBottom: 26 }}>
                  <label style={labelStyle}>
                    Password
                  </label>

                  <div style={{ position: "relative" }}>
                    <Lock
                      size={17}
                      style={iconStyle}
                    />

                    <input
                      required
                      type="password"
                      minLength={8}
                      value={form.password}
                      onChange={(e) =>
                        updateField(
                          "password",
                          e.target.value
                        )
                      }
                      placeholder="Minimum 8 characters"
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  Create{" "}
                  {accountType === "Developer"
                    ? "Developer"
                    : "Industry"}{" "}
                  Account
                  <ArrowRight size={17} />
                </button>

                <p
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    color: C.muted,
                    marginTop: 16,
                    lineHeight: 1.6,
                  }}
                >
                  By creating an account, you agree to
                  HonorCode&apos;s terms and privacy policy.
                </p>
              </form>
            </Card>
          )}
        </div>
      </section>
    </main>
  );
}

const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 700,
  color: C.text,
  marginBottom: 8,
};

const iconStyle = {
  position: "absolute" as const,
  left: 14,
  top: "50%",
  transform: "translateY(-50%)",
  color: C.muted,
};

const inputStyle = {
  width: "100%",
  height: 46,
  borderRadius: 12,
  border: `1px solid ${C.border}`,
  background: "#fff",
  padding: "0 14px 0 42px",
  fontSize: 14,
  color: C.text,
  outline: "none",
  boxSizing: "border-box" as const,
};

const plainInputStyle = {
  ...inputStyle,
  paddingLeft: 14,
};