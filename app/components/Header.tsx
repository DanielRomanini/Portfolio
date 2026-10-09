import Link from "next/link";
import NavLink from "./NavLink";
import SocialLinks from "./SocialLinks";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/extracurriculars", label: "Extracurriculars" },
];

export default function Header() {
  return (
    <header>
      <div className="grid w-full grid-cols-2 items-center gap-y-4 px-6 py-5 sm:grid-cols-[1fr_auto_1fr] sm:px-8">
        <Link
          href="/"
          className="justify-self-start rounded-sm font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          Daniel Romanini de Barros
        </Link>
        <nav
          aria-label="Main"
          className="order-last col-span-2 justify-self-center rounded-full border border-foreground/10 bg-foreground/5 px-6 py-2.5 backdrop-blur sm:order-none sm:col-span-1"
        >
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-medium sm:gap-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="justify-self-end">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}
