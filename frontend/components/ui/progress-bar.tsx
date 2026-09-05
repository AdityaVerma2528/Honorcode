import { C } from "@/lib/theme";

type ProgressBarProps = {
  value: number;
  color?: string;
  height?: number;
};

export function ProgressBar({
  value,
  color = C.purple,
  height = 6,
}: ProgressBarProps) {
  return (
    <div
      style={{
        height,
        borderRadius: 99,
        background: "#E2E8F0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: "100%",
          background: color,
          borderRadius: 99,
          transition: "width 0.5s ease",
        }}
      />
    </div>
  );
}
