export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <img
      src="/logo.png"
      alt="HonorCode"
      style={{
        height: dark ? 40 : 36,
        width: "auto",
        maxWidth: "100%",
        objectFit: "contain",
        objectPosition: "center",
        display: "block",
      }}
    />
  );
}
