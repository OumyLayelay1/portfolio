import Text from "@/components/Text";
import TextOrange from "@/components/TextOrange";
import Carousel from "@/components/Carousel";
import { ProjetData } from "@/Data/ProjetData";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <div className="text-white flex flex-col gap-6">
      <Text
        text={"Projets en"}
        className={"text-[34px] sm:text-[24px] md:text-[28px] md:text-center sm:text-center lg:text-center"}
      >
        <TextOrange name={"vedette"} />
      </Text>
      <Carousel data={ProjetData}>
      {ProjetData.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-start sm:items-center md:items-center lg:items-center justify-center gap-1"
            >
              <div className="flex gap-[3.5rem] items-center">
              <Text text={item.nom} className="text-[20px] sm:text-[16px] md:text-[18px] text-white font-[700]"/>
              <Link
                  href={item.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm text-[white] pb-2 underline hover:text-[#7D7373]"
                >
                  Visitez le site
                </Link>
              </div>
              <Text text={item.description} className="text-[16px] sm:text-[13] md:text-[14px] font-[400] text-[#7D7373] sm:text-center md:text-center lg:text-center"/>
              {/* Image */}
              {item.image && (
                <div className="relative h-40 w-full min-h-40 max-h-40">
                  <Image
                    className="pointer-events-none rounded-md w-full"
                    alt={`carousel-image-${index}`}
                    src={item.image}
                    fill
                  />
                </div>
              )}
            </div>
          ))}
      </Carousel>
    </div>
  );
}

export default Page;
