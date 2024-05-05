import { Button } from "../ui/button";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { GiOpenBook } from "react-icons/gi";
import { PiPhoneCallFill } from "react-icons/pi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export const links = [
  { name: "Home", href: "#home", icon: <SiHomeassistantcommunitystore className="text-black text-xl" /> },
  { name: "Portfolio", href: "#portfolio", icon: <GiOpenBook className="text-black text-xl" /> },
  { name: "Contact", href: "#contact", icon: <PiPhoneCallFill className="text-black text-xl" /> },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col">
      <aside className="fixed w-12 sm:w-48 h-screen backdrop-blur flex flex-col items-center justify-center sm:justify-normal gap-8 p-2">
        <div className="hidden sm:flex h-36 w-28 rounded-b-full bg-white bg-opacity-20 shadow shadow-white">
          <Avatar className="h-full w-full">
            <AvatarImage src="/images/yuda.png" alt="Yuda" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              <Button className="w-full bg-white bg-opacity-60 hover:bg-white hover:bg-opacity-100 p-1">
                {link.icon}
                <label className="ml-2 text-black font-semibold text-lg hidden sm:flex">{link.name}</label>
              </Button>
            </Link>
          ))}
        </div>
      </aside>
      <main className="overflow-hidden bg-lamp">
        <div className="w-[calc(100vw-3rem)] sm:w-[calc(100vw-12rem)] relative left-12 sm:left-48 bg-slate-900 text-white">{children}</div>
      </main>
    </section>
  );
};

export default DashboardLayout;
