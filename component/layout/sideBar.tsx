import React, { useState } from "react";
import { CustomFlowbiteTheme, Sidebar } from "flowbite-react";
import { HiChartPie, HiViewBoards } from "react-icons/hi";
import { useRouter } from "next/router";
import listMenu from "./listMenu";
import Link from "next/link";

interface SideBarProps {
  sidebarOpen: boolean;
}
function SideBar({ sidebarOpen }: SideBarProps) {

const router = useRouter();
const isItemActive = (href: string) => {
  if (router.asPath === "/home" && href === "/") {
    return true;
  }
  return router.asPath === href;
};

  return (
    <div>
      {sidebarOpen && (
        <Sidebar
          aria-label="Sidebar with content separator example"
          theme={customTheme}
          style={{
            background: "#d5ebed",
            height: "100vh",
          }}
        >
          <div className="flex items-center flex-shrink-0 text-black ">
            <svg
              className="fill-current h-8 w-8 "
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-xl tracking-tight">
              Apa Aja
            </span>
          </div>
          <Sidebar.Items>
            <Sidebar.ItemGroup className="flex flex-col flex-start">
              {listMenu.map((menuItem: any, index: any) => (
                <Link href={menuItem.to} key={index}>
                  <div
                    className={`py-2 px-2 rounded-md ${
                      isItemActive(menuItem.path)
                        ? "bg-cyan-200 hover:bg-cyan-200 text-red-800  "
                        : "text-gray-950 hover:text-white hover:bg-cyan-200"
                    }`}
                  >
                    <div className="flex items-center">
                      {React.createElement(menuItem.icon)}
                      <p className="pl-2">{menuItem.name}</p>
                    </div>
                  </div>
                </Link>
              ))}

              {/* <Sidebar.Item href="/">
                <div className="flex items-center">
                  <HiChartPie className="black" />
                  <p className="pl-2">Dashboard</p>
                </div>
              </Sidebar.Item>
              <Sidebar.Item href="/book">
                <div className="flex items-center">
                  <HiViewBoards className="black" />
                  <p className="pl-2">Book</p>
                </div>
              </Sidebar.Item> */}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      )}
    </div>
  );
}

export default SideBar;

const customTheme: CustomFlowbiteTheme["sidebar"] = {
  root: {
    inner: "bg-primary h-full  overflow-x-hidden py-4 px-3",
  },
};