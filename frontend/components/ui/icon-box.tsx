import React from "react";

type IconBoxProps = {
  icon: React.ComponentType<{ size?: number; color?: string; style?: React.CSSProperties }>;
  color: string;
  bg: string;
  size?: number;
  style?: React.CSSProperties;
};

export function IconBox({
  icon: Icon,
  color,
  bg,
  size = 36,
  style = {},
}: IconBoxProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 10,
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style,
      }}
    >
      <Icon size={size * 0.45} color={color} />
    </div>
  );
}
