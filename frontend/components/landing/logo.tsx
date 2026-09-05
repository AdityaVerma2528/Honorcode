import { Layers } from "lucide-react";
import { C } from "@/lib/theme";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 10,
          background: `linear-gradient(135deg, ${C.purple}, ${C.green})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Layers size={18} color="#fff" />
      </div>

      <div>
        <span
          style={{
            fontWeight: 800,
            fontSize: 16,
            color: dark ? "#fff" : C.text,
            letterSpacing: "-0.03em",
          }}
        >
          Honor
        </span>
        <span
          style={{
            fontWeight: 800,
            fontSize: 16,
            color: C.green,
            letterSpacing: "-0.03em",
          }}
        >
          Code
        </span>
      </div>
    </div>
  );
}
