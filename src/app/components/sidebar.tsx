import React from "react";
import Image from "next/image";
import SidebarItem from "@/app/components/sidebar-item";
import logo from "../../public/icons/logo.svg";
import arrow from "../../public/icons/arrow-left-on-rectangle.svg";
import briefcase from "../../public/icons/briefcase.svg";
import squares from "../../public/icons/squares.svg"

export interface SideBarProps {}

export default function SideBar({}: SideBarProps) {
    return (
        <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
            <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
                <Image src={logo} alt="logo" width={122} height={25} className="py-8 mb-11 mx-auto"/>
                <ul className="space-y-7">
                    <SidebarItem pathname="/dashboard" src={squares}
                                 alt="dashboard icon">Dashboard</SidebarItem>
                    <SidebarItem pathname="/companies" src={briefcase}
                                 alt="companies icon">Companies</SidebarItem>
                </ul>
                <button className="flex items-center gap-2 p-6 mt-auto mx-auto">
                    <Image src={arrow} alt="exit icon" width={18} height={18}/>
                    <span className="font-medium text-white">Exit</span>
                </button>
            </div>
        </aside>
    );

}
