import { IoCodeSlash } from "react-icons/io5";
import Text from "@/components/Text";
import TextOrange from "@/components/TextOrange";
import { SpecialisationData } from "@/Data/SpecialisationData";

const Page = () => {
  return (
    <div className="text-white flex flex-col gap-6">
      <Text
        text={"Mes"}
        className="text-[34px] sm:text-[24px] md:text-[28px] md:text-center sm:text-center lg:text-center"
      >
        <TextOrange name={"spécialisations"} />
      </Text>
      {SpecialisationData.map((item) => {
        return (
          <div
            className="border-[1px] border-[#F24E1E] rounded-xl p-6"
            key={item.id}
          >
            <div className="flex justify-between items-center pb-3">
              <Text
                text={item?.post}
                className="text-[18px] sm:text-[14px] md:text-[15px] font-[700]"
              />
              <IoCodeSlash className="text-[#F24E1E]" />
            </div>
            <Text
              text={item?.description}
              className={
                "text-[#7D7373] text-[14px] md:text-center sm:text-center lg:text-center"
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default Page;
