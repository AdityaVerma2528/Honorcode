import type { ComponentType, CSSProperties } from "react";
import { C } from "@/lib/theme";

type StatCardProps = {
  icon: ComponentType<{ size?: number; color?: string }>;
  label: string;
  value: string;
  sub: string;
  color: string;
  bg: string;
};

export function StatCard({ icon: Icon, label, value, sub, color, bg }: StatCardProps) {
  const iconStyle: CSSProperties = {
    width: 42,
    height: 42,
    borderRadius: 12,
    background: bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };

  return (
    <div
      style={{
        background: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: 16,
        padding: 20,
        boxShadow: "0 1px 8px #0F172A08",
      }}
    >
      <div style={iconStyle}>
        <Icon size={20} color={color} />
      </div>
      <div style={{ marginTop: 14 }}>
        <div
          style={{
            fontSize: 12,
            color: C.muted,
            fontWeight: 600,
            marginBottom: 4,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: 26,
            lineHeight: 1.1,
            fontWeight: 800,
            color: C.text,
            letterSpacing: "-0.03em",
          }}
        >
          {value}
        </div>
        <div style={{ fontSize: 11, color: C.muted, marginTop: 6 }}>{sub}</div>
      </div>
    </div>
  );
}
