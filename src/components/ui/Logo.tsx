export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-2xl font-bold tracking-tight text-white ${className}`}
    >
      LL
      <span className="text-gradient-blue">Dev</span>
    </span>
  );
}
