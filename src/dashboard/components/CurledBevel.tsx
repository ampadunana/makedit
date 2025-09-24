export default function CurledBevel({
  size = 200,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0 H200 V200 H0 V0 Q100 0 0 100 Z"
        fill="currentColor"
      />
    </svg>
  );
}