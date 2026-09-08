import { C } from "@/lib/theme";

export function DashboardLogo({ dark = false }: { dark?: boolean }) {
  return (
    <div
      style={{
        width: 130,
        height: 36,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: dark ? "#000" : "#000",
        borderRadius: 0,
      }}
    >
      <img
        src="/dashboard-logo.png"
        alt="HonorCode"
        style={{
          width: 130,
          height: 130,
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
    </div>
  );
}