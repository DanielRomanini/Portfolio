const glowClass = "absolute bg-radial to-transparent to-70%";

export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className={`${glowClass} left-1/2 top-0 size-[70vmax] -translate-x-1/2 -translate-y-1/2 from-accent/35 motion-safe:animate-drift-a`}
      />
      <div
        className={`${glowClass} bottom-0 right-0 size-[55vmax] translate-x-1/3 translate-y-1/3 from-accent/20 motion-safe:animate-drift-b`}
      />
      <div
        className={`${glowClass} left-0 top-1/2 size-[50vmax] -translate-x-1/2 -translate-y-1/2 from-accent/15 motion-safe:animate-drift-c`}
      />
    </div>
  );
}
