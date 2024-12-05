import TextOrange from "@/components/TextOrange";
import Text from "@/components/Text";
import { IconData } from "@/Data/IconData";

const Page = () => {
  return (
    <div className="text-white flex flex-col gap-6">
      <Text
        text={"Mes"}
        className="text-[34px] sm:text-[24px] md:text-[28px] md:text-center sm:text-center lg:text-center"
      >
        <TextOrange name={"compétences"} />
      </Text>
      <div className="grid grid-cols-12 gap-3">
        {IconData.map((item) => {
          return (
            <div className="col-span-2 sm:col-span-4 md:col-span-3" key={item.id}>
              <div className="flex flex-col items-center gap-2">
                <div className="border-[1px] border-[#7D7373] rounded-full px-4 py-8 flex flex-col items-center gap-2">
                  <span className="text-[35px] font-[400]">{item?.icon}</span>
                  <TextOrange name={item?.pourcentage} className={"font-lohit text-[18px] font-[400]"}/>
                </div>
                <Text text={item.nom} className={"text-[14px]"} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
