"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, User } from "lucide-react";
import { C } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/landing/logo";
import { useRouter } from "next/navigation";

export function SigninPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const update =
    (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

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
          onClick={() => {
            window.location.href = "/";
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
          <ChevronLeft size={15} /> Back to Home
        </button>
      </nav>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 24px",
        }}
      >
        <div style={{ width: "100%", maxWidth: 480 }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: C.purpleXL,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <User size={26} color={C.purple} />
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
              Create Your Student Account
            </h1>
            <p style={{ fontSize: 14, color: C.muted }}>
              Join 50,000+ students already on HonorCode AI
            </p>
          </div>

          <Card style={{ padding: 28 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                {
                  label: "Email Address",
                  key: "email",
                  type: "email",
                  placeholder: "soumya245@gmail.com",
                  span: 2,
                },
                {
                  label: "Password",
                  key: "password",
                  type: "password",
                  placeholder: "••••••••",
                  span: 2,
                },
              ].map((f) => (
                <div key={f.key} style={{ gridColumn: `span ${f.span}` }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 600,
                      color: C.textMid,
                      marginBottom: 6,
                    }}
                  >
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={(form as any)[f.key]}
                    onChange={update(f.key)}
                    style={inputStyle}
                  />
                </div>
              ))}
            </div>

            <div style={{ marginTop: 20 }}>
              <Button
                full
                onClick={() => {
                  router.push("/dashboard");
                }}
                size="lg"
              >
                Sign in <ArrowRight size={16} />
              </Button>
            </div>

            <p
              style={{ textAlign: "center", fontSize: 12, color: C.muted, marginTop: 16 }}
            >
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </Card>

          <p style={{ textAlign: "center", fontSize: 13, color: C.muted, marginTop: 16 }}>
            Already have an account?{" "}
            <button
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
