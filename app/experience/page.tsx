import type { Metadata } from "next";
import OrganizationCard from "../components/OrganizationCard";
import { companies } from "./companies";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
      <p className="mt-4 text-foreground/70">
        Select a company to see the positions I&apos;ve held.
      </p>
      <ul className="mt-8 space-y-4">
        {companies.map((company) => (
          <li key={company.name}>
            <OrganizationCard organization={company} />
          </li>
        ))}
      </ul>
    </>
  );
}
