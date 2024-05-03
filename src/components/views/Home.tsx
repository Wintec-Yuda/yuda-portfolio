import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Skills from "../fragments/Skills";
import Experience from "../fragments/Experience";
import { Badge } from "../ui/badge";

const HomeView = () => {
  return (
    <section className="relative top-10 bg-secondary bg-slate-800 text-white">
      <div className="flex flex-col justify-center gap-4 md:gap-8 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex justify-center md:items-center">
            <Avatar className="h-56 w-48 md:h-72 md:w-64 shadow-2xl bg-white bg-opacity-5 brightness-75 shadow-md shadow-black ">
              <AvatarImage src="/images/yuda.png" alt="Yuda" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-3xl xl:text-4xl font-semibold">Mochamad Yuda Trinurais</h1>
              <Badge className="text-lg md:text-xl">Fullstack Web Developer</Badge>
            </div>
            <p className="text-sm sm:text-md md:text-lg text-justify indent-8">
              Sebagai mahasiswa dari Universitas Nusantara PGRI Kediri, saya berhasil menjalankan studi dengan baik dan memiliki pemahaman yang mendalam tentang teknologi, khususnya dalam pengembangan web. Saya sangat menekankan
              pemeliharaan kode yang bersih dann jelas, guna memudahkan kolaborasi tim dan perbaikan kode di masa mendatang. Saat ini, saya sangat tertarik pada pengembangan aplikasi web yang responsif. Saya senang belajar dan terus
              mengikuti perkembangan teknologi terbaru dalam industri ini. Selain itu, saya percaya bahwa komunikasi yang baik adalah kunci kesuksesan dalam setiap proyek. Saya senang berkolaborasi dengan desainer, pengembang, dan pemangku
              kepentingan lainnya untuk mencapai tujuan bersama.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-4">
          <div className="flex flex-col gap-2 xl:w-1/3">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-semibold underline">Skills</h2>
            <Skills />
          </div>
          <div className="flex flex-col gap-2 xl:w-2/3">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-semibold underline">Internship Experience</h2>
            <Experience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeView;
