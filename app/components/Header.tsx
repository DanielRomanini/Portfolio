import Link from "next/link";
import NavLink from "./NavLink";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/extracurriculars", label: "Extracurriculars" },
  { href: "/resume", label: "Resume" },
];

export default function Header() {
  return (
    <header className="border-b border-foreground/10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="rounded-sm font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          Daniel Romanini
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
