import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  color: string;
  bg: string;
  style?: React.CSSProperties;
};

export function Badge({ children, color, bg, style = {} }: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "3px 10px",
        borderRadius: 99,
        fontSize: 12,
        fontWeight: 600,
        color,
        background: bg,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
