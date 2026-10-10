import Image from "next/image";

export type Position = {
  title: string;
  dates?: string;
  bullets: string[];
};

export type Organization = {
  name: string;
  // Path to a file in public/, for example "/clubs/shpe.png".
  // Leave it out to show the organization's first letter instead.
  icon?: string;
  positions: Position[];
};

type OrganizationCardProps = {
  organization: Organization;
};

export default function OrganizationCard({organization,}: OrganizationCardProps) {
  return (
    <details className="group rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur">
      <summary className="flex cursor-pointer items-center gap-4 rounded-2xl p-4 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground [&::-webkit-details-marker]:hidden">
        {organization.icon ? (
          <Image
            src={organization.icon}
            alt=""
            width={48}
            height={48}
            className="size-12 shrink-0 rounded-xl object-contain"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-lg font-semibold text-accent"
          >
            {organization.name.charAt(0)}
          </span>
        )}
        <h2 className="text-lg font-semibold tracking-tight">
          {organization.name}
        </h2>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="ml-auto size-5 shrink-0 text-foreground/60 group-open:rotate-180 motion-safe:transition-transform"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <ul className="space-y-5 border-t border-foreground/10 p-4">
        {organization.positions.map((position) => (
          <li key={`${position.title} ${position.dates}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-medium">{position.title}</h3>
              {position.dates && (
                <p className="text-sm text-foreground/60">{position.dates}</p>
              )}
            </div>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 leading-7 text-foreground/70">
              {position.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </details>
  );
}
