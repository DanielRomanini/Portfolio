import type { Metadata } from "next";
import OrganizationCard from "../components/OrganizationCard";
import { clubs } from "./clubs";

export const metadata: Metadata = {
  title: "Extracurriculars",
};

export default function ExtracurricularsPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">Extracurriculars</h1>
      <p className="mt-4 text-foreground/70">
        Select a club to see the positions I&apos;ve held.
      </p>
      <ul className="mt-8 space-y-4">
        {clubs.map((club) => (
          <li key={club.name}>
            <OrganizationCard organization={club} />
          </li>
        ))}
      </ul>
    </>
  );
}
