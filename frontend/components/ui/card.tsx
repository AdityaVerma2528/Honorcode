import React from "react";
import { C } from "@/lib/theme";

type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
};

export function Card({ children, style = {}, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        background: C.card,
        borderRadius: 16,
        border: `1px solid ${C.border}`,
        boxShadow: "0 1px 8px #0F172A08",
        ...(onClick ? { cursor: "pointer" } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
