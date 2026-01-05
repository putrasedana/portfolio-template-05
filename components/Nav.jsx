"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/resume", label: "Resume" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`${
            link.href === pathname &&
            "text-green-500 border-b-2 border-green-500"
          } capitalize font-medium hover:text-green-500 transition-all`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
export default Nav;
