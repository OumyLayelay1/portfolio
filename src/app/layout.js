import localFont from "next/font/local";
import "./globals.css";
import InfoPersonnel from "@/Layouts/InfoPersonnel";
import SidebarRight from "@/Layouts/SidebarRight";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Mon portfolio",
  description:
    "Bienvenue sur mon portfolio ! Je suis Oumy Laye KANE développeuse web frontend. Spécialisée en intégration et récupération de données,  ce site vous propose un aperçu de mes projets et réalisations.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black sm:bg-[#1D1C1D] md:bg-[#1D1C1D]`}
      >
        <main className="bg-[#1D1C1D] border border-[#1D1C1D] rounded-3xl min-h-screen flex flex-direction items-center p-20 sm:p-0 md:p-0 lg:p-0 xl:p-2">
          <div className="grid grid-cols-12 gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-12 items-center w-full sm:mb-[3rem] lg:mb-[3rem] md:mb-[3rem]">
            <div className="col-span-4 md:col-span-12 lg:col-span-12 sm:col-span-12 xl:col-span-3 w-full">
              <InfoPersonnel />
            </div>
            <div className="col-span-7 md:col-span-12 lg:col-span-12 sm:col-span-12 w-[42em] px-8 w-full">{children}</div>
            <div className="col-span-1 lg:hidden sm:hidden md:hidden xl:block">
              <SidebarRight />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
