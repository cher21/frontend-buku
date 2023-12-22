"use client";

import Link from "next/link";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from "react-icons/hi2";
import { useState } from "react";
import { useRouter } from "next/router";

function NavbarComponent({toggleSidebar}:any) {
    const [isIconRotated, setIsIconRotated] = useState(false);
    const router = useRouter();
    const handleIconClick = () => {
      toggleSidebar();
      setIsIconRotated(!isIconRotated);
    };

  return (
    <Navbar fluid rounded style={{ backgroundColor: "#dbe4e4" }}>
      {isIconRotated ? (
        <HiOutlineChevronDoubleRight
          onClick={handleIconClick}
          className="cursor-pointer"
        />
      ) : (
        <HiOutlineChevronDoubleLeft
          onClick={handleIconClick}
          className="cursor-pointer"
        />
      )}
      <Navbar.Toggle />
      <div className="ml-auto">
        <Navbar.Collapse>
          <Navbar.Link
            href=""
            active={router.pathname === "/"}
            className="flex items-center h-full"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            href="/book"
            active={router.pathname === "/book"}
            className="flex items-center h-full"
          >
            Book
          </Navbar.Link>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarComponent