import Link from "next/link";
import { Button } from "../ui/button";
import { SiWhatsapp, SiGmail } from "react-icons/si";

const contacts = [
  {
    name: "WhatsApp",
    icon: <SiWhatsapp size={30} className="text-green-400" />,
    link: "whatsapp://send?phone=+6285179945123",
  },
  {
    name: "Gmail",
    icon: <SiGmail size={30} className="text-red-400" />,
    link: "mailto:yudarais99@gmail.com",
  },
];

const Contact = () => {
  return (
    <div className="grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
      {contacts.map((contact) => (
        <div key={contact.name} className="flex flex-col gap-4 justify-center items-center border-2 border-white bg-black bg-opacity-20 rounded-md hover:bg-slate-950 py-4">
          {contact.icon}
          <Link href={contact.link} target="_blank">
            <Button variant="secondary" className="text-sm">{contact.name}</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Contact;
