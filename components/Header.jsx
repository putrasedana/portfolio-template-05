import Link from "next/link";
import { Button } from "./ui/button";
// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl md:text-4xl font-bold">
            Nolan<span className="text-green-500">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
export default Header;
