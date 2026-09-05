import React from "react";
import { C } from "@/lib/theme";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost" | "green" | "danger";
  size?: "sm" | "md" | "lg";
  full?: boolean;
  style?: React.CSSProperties;
};

export function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  full = false,
  style = {},
}: ButtonProps) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontWeight: 600,
    borderRadius: 10,
    cursor: "pointer",
    transition: "all 0.15s",
    border: "none",
    fontFamily: "inherit",
    width: full ? "100%" : undefined,
    ...(size === "sm"
      ? { padding: "8px 14px", fontSize: 13 }
      : size === "lg"
        ? { padding: "14px 28px", fontSize: 16 }
        : { padding: "10px 20px", fontSize: 14 }),
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: { background: C.purple, color: "#fff" },
    outline: {
      background: "transparent",
      color: C.purple,
      border: `1.5px solid ${C.purple}`,
    },
    ghost: {
      background: "transparent",
      color: C.muted,
      border: `1.5px solid ${C.border}`,
    },
    green: { background: C.green, color: "#fff" },
    danger: { background: C.rose, color: "#fff" },
  };

  return (
    <button
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {children}
    </button>
  );
}
