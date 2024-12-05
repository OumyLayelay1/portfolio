import TextOrange from "@/components/TextOrange";
import Text from "@/components/Text";
import React from "react";

const PageHome = () => {
  return (
    <div className="text-white flex flex-col gap-6">
      <Text text={"Travaillons "} className={"text-[34px] sm:text-[24px] md:text-[28px] md:text-center sm:text-center lg:text-center"}>
        <TextOrange name={"ensemble !"} />
      </Text>
      <div>
        <Text text={"Salut, je suis"} className={"text-[40px] sm:text-[29px] md:text-[32px] font-[700] mb-0 pb-0 md:text-center sm:text-center lg:text-center"}>
          <TextOrange name={"Oumy Laye Kane,"} />
        </Text>
        <Text
          text={"développeuse web frontend."}
          className={"text-[40px] sm:text-[29px] md:text-[32px] font-[700] md:text-center sm:text-center lg:text-center"}
        />
      </div>
      <div className="">
        <Text
          text={
            "Je tire une immense joie de concevoir et de coder des créations belles et simples. Mon travail est une véritable passion, caractérisée par un engagement pour l'élégance et la convivialité."
          }
          className={"text-[#7D7373] text-[15px] md:text-center sm:text-center lg:text-center"}
        />
      </div>
      <div className="flex items-baseline md:justify-center sm:justify-center lg:justify-center gap-20">
        <div className="">
          <TextOrange name={"2+"} className={"text-[50px] font-lohit"} />
          <Text
            text={"Ans d'Expérience"}
            className={"text-[14px] sm:text-[11px] text-[#7D7373] text-center"}
          />
        </div>
        <div className="">
          <TextOrange name={"12+"} className={"text-[50px] font-lohit"} />
          <Text
            text={"Projets"}
            className={"text-[14px] sm:text-[11px] text-[#7D7373] text-center"}
          />
        </div>
      </div>
    </div>
  );
};

export default PageHome;
