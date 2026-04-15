interface Props {
  className?: string;
  color?: string;
  size?: number;
}

export default function GradientBlob({
  className = "",
  color = "rgba(155, 221, 255, 0.3)",
  size = 400,
}: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
    />
  );
}
