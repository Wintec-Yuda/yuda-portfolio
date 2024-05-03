import { links } from "@/lib/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-10 bg-sky-800 bg-opacity-20 shadow shadow-blue-300">
      <div className="flex justify-center items-center gap-2 py-2 backdrop-blur">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="bg-slate-800 text-slate-100 py-1 px-2 rounded hover:bg-white hover:bg-opacity-20">
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
