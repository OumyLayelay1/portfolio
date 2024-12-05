"use client";
import React, { useState } from "react";
import Image from "next/image";
import PictureOumy from "../../public/Images/olkPicture.png";
import TextOrange from "@/components/TextOrange";
import Text from "@/components/Text";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram, FaGoogle, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import SidebarRight from "./SidebarRight";


const InfoPersonnel = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="border-[1px] border-[#FFFFFF33] rounded-xl p-8 sm:m-4 md:m-4 lg:m-2">
      <div>
        <div className="flex justify-between items-center pb-3 relative">
        <p className="text-white font-[400] text-[26px] xl:text-[19px] sm:text-[20px] md:text-[20px]">
          <TextOrange name={"0"} />
          umy <TextOrange name={"L"} />
          aye <TextOrange name={"K"} />
          ANE
        </p>
        <div className="hidden sm:block md:block lg:block xl:hidden">
        <RxHamburgerMenu 
            className="text-white text-3xl cursor-pointer"
            onClick={toggleSidebar} 
          />
        </div>
          {
            isSidebarOpen && (
              <div className="fixed top-0 right-0 h-full w-[300px] bg-[#1a1a1a] z-50 shadow-lg transition-transform transform translate-x-0">
              <SidebarRight toggleSidebar={toggleSidebar} noBorder/>
            </div>
            )}
        </div>
        <div className="md:flex sm:flex lg:flex justify-center">
        <div className="flex justify-center bg-black border-1 border-black rounded-3xl lg:w-[35%]">
          <Image src={PictureOumy} alt="Mon image" className="w-full h-[20rem] xl:h-[15rem] mb-[15px] ms-1" priority/>
        </div>
        </div>
        <div className="text-center pt-3">
        <Text text={"Basée à Dakar"} className={"text-[17px] text-[white]"}/>
        <Text text={"Développeuse web front-end"} className={"text-[13px] text-[#7D7373]"}/>
        </div>
        <div className="flex justify-center items-center gap-6 text-3xl pt-3 text-white">
           <Link href="https://x.com/olk_laye?s=21" target="_blank"> <RiTwitterXFill/></Link>
           <Link href="https://www.linkedin.com/in/oumylayekane/" target="_blank"> <FaLinkedin/></Link>
           <Link href="https://www.instagram.com/oumylayeolk/profilecard/?igsh=MThkbWhvNXc5Z2c4aw==" target="_blank"> <FaInstagram/></Link>
           <Link href="mailto: kaneoumy2507@gmail.com" target="_blank"> <FaGoogle/></Link>   
        </div>
        <div className="grid grid-cols-12 sm:flex md:flex lg:flex justify-center">
        <Link href={"mailto: kaneoumy2507@gmail.com"}
        className="text-center col-span-12" target="_blank">
            <Text text={"ENGAGEZ-MOI!"} 
            className={"font-lohit text-[22px] xl:text-[16px] text-[#1D1C1D] bg-[#FF5C00] px-[35px] xl:px-[10px] py-[5px] mt-6 border border-[#FF5C00] rounded-xl"}/>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoPersonnel;