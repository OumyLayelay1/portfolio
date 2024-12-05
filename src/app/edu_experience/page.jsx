"use client";
import { useState } from "react";
import Text from "@/components/Text";
import TextOrange from "@/components/TextOrange";
import { eduExperience } from "@/Data/Edu_ExperienceData";
import Modal from "@/Layouts/Modal";
import Button from "@/components/Button";

const EduExperience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="text-white flex flex-col gap-6">
      <Text
        text={"Education &"}
        className={"text-[34px] sm:text-[24px] md:text-[28px] md:text-center sm:text-center lg:text-center"}
      >
        <TextOrange name={"Expérience"} />
      </Text>
      <div className="sm:text-center md:text-center lg:text-center">
        <TextOrange
          name={"Actuellement - 2024"}
          className={"text-[18px] font-[400]"}
        />
        <Text
          text={"Développeuse web front-end"}
          className={
            "text-[white] text-[18px] font-[700] md:text-center sm:text-center lg:text-center"
          }
        />
      </div>
      {eduExperience.slice(0, 3).map((item) => {
        return (
          <div className="py-0 my-0" key={item.id}>
            <Text
              text={item?.ans}
              className={
                "text-[#7D7373] text-[15px] md:text-center sm:text-center lg:text-center py-0 my-0"
              }
            />
            <Text
              text={item?.post}
              className={
                "text-[white] text-[18px] font-[700] md:text-center sm:text-center lg:text-center py-0 my-0"
              }
            />
            <Text
              text={item?.lieu}
              className={
                "text-[#7D7373] text-[15px] md:text-center sm:text-center lg:text-center py-0 my-0"
              }
            />
          </div>
        );
      })}
      <div className="grid grid-cols-12 sm:flex md:flex lg:flex justify-center">
        <Button onClick={handleOpenModal} type={"button"}>
        <Text
            text={"Voir plus"}
            className={
              "font-lohit text-[#1D1C1D] text-[22px] xl:text-[16px]"
            }
          />
        </Button>
      </div>
      {isModalOpen && (
        <Modal
          bg={"bg-[#7D7373] shadow shadow-2xl"}
          onOpenModal={handleCloseModal}
          onCloseModal={handleCloseModal}
          titre={"Education & Expérience"}
          className="text-[20px] font-[700] text-[white]"
          color="text-[white]"
        >
          {eduExperience.map((item) => {
            return (
              <div className="py-3 my-0" key={item.id}>
                <Text
                  text={item?.ans}
                  className={
                    "text-[#1D1C1D] text-[13px] md:text-center sm:text-center lg:text-center py-0 my-0"
                  }
                />
                <Text
                  text={item?.post}
                  className={
                    "text-[white] text-[15px] font-[700] md:text-center sm:text-center lg:text-center py-0 my-0"
                  }
                />
                <Text
                  text={item?.lieu}
                  className={
                    "text-[#1D1C1D] text-[13px] md:text-center sm:text-center lg:text-center py-0 my-0"
                  }
                />
              </div>
            );
          })}
        </Modal>
      )}
    </div>
  );
};

export default EduExperience;
