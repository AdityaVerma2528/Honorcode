import { C } from "@/lib/theme";

export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, letterSpacing: "-0.03em", marginBottom: 4 }}>{title}</h1>
      <p style={{ fontSize: 14, color: C.muted }}>{subtitle}</p>
    </div>
  );
}

