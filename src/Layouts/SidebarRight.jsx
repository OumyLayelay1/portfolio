"use client";
import Link from "next/link";
import { Sidebar } from "@/Data/SidebarData";
import { usePathname } from "next/navigation";

function SidebarRight({ toggleSidebar, noBorder = false }) {
  const pathname = usePathname();

  return (
    <div
      className={`${
        noBorder ? "border-0" : "border-[1px] border-[#FFFFFF33]"
      } rounded-full px-3 py-8`}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        {Sidebar.map((item) => {
          return (
            <Link
              href={item?.lien}
              key={item?.id}
              className={`text-3xl ${
                pathname === item?.lien ? "text-[#FF5C00]" : "text-[#7D7373]"
              }`}
              onClick={toggleSidebar}
            >
              {item?.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SidebarRight;
