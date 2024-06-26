import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "../ui/badge";
import { sertificates } from "@/lib/data";
import Image from "next/image";
import { GiClick } from "react-icons/gi";

const Sertificates = () => {
  return (
    <div className="grid grid-cols-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-4 p-1">
      {sertificates.map((sertificate) => (
        <div key={sertificate.program} className="relative flex flex-col gap-2 justify-center items-center border-2 border-white bg-black bg-opacity-20 rounded-md hover:bg-slate-950 py-4 px-2">
          <GiClick size={30} className="text-white absolute -bottom-3 -right-3" />
          <Dialog key={sertificate.company}>
            <DialogTrigger>
              <div className="flex flex-col gap-2 justify-center items-center">
                <label className="text-sm sm:text-base font-bold">{sertificate.program}</label>
                <Badge className="text-xs sm:text-sm">{sertificate.company}</Badge>
              </div>
            </DialogTrigger>
            <DialogContent className="w-screen h-96 bg-white bg-opacity-50">
              <DialogHeader>
                <DialogDescription>
                  <Image src={sertificate.link} alt={sertificate.company} width={500} height={500} className="rounded-md border-2 border-black shadow-lg shadow-black" />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
};

export default Sertificates;
