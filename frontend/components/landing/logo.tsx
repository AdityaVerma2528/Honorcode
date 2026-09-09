export function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <img
      src="/logo.png"
      alt="HonorCode"
      style={{
        height: dark ? 200*0.8 : 180*0.8,
        width: "auto",
        maxWidth: "100%",
        objectFit: "contain",
        objectPosition: "center",
        display: "block",
      }}
    />
  );
}