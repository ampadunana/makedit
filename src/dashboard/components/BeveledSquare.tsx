export default function Square({
  size = 100,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      <path
        d={`
          M 0 0
          H ${size}
          V ${size}
          H 0
          Z
        `}
        fill="currentColor"
      />
    </svg>
  );
}
