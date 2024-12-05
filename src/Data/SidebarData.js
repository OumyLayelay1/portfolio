import { GoHome } from "react-icons/go";
import { PiUserListThin } from "react-icons/pi";
import { LiaFolderOpen } from "react-icons/lia";
import { SiWheniwork } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { VscTerminalPowershell } from "react-icons/vsc";
import { FiMessageSquare } from "react-icons/fi";

export const Sidebar = [
  { id: 0, icon: <GoHome/>, lien:"/"},
  { id: 1, icon: <PiUserListThin/>, lien:"/apropos"},
  { id: 2, icon: <LiaFolderOpen/>, lien:"/edu_experience"},
  { id: 3, icon: <SiWheniwork/>, lien:"/specialisation"},
  { id: 5, icon: <MdWorkOutline/>, lien:"/projets"},
  { id: 6, icon: <VscTerminalPowershell/>, lien:"/competences"},
  { id: 7, icon: <FiMessageSquare/>, lien:"/contact"}
];
