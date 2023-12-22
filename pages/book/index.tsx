"use client";

import { TextInput, Pagination } from "flowbite-react";
import React from "react";
import Modals from "@/component/modal/Modals";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Button, ListGroup } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiOutlineDotsVertical, HiOutlinePlus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { doRequestGetBook } from "@/redux/action/actionBook";
import Tables from "@/component/table/Tables";
import { FormBook } from "./formBook";
import { FormDelete } from "./formDelete";

const Dashboard = () => {
  const { books = [], refresh } = useSelector(
    (state: any) => state.bookReducers
  );
  // const { isMobile, isTablet, isDesktop } = useWindowSize();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState({
    judul_buku: "",
    penulis: "",
    tgl_publikasi: "",
    image: "",
    id: 0,
    isShow: false,
  });

  const [isDelete, setIsDelete] = useState({
    judul_buku: "",
    penulis: "",
    tgl_publikasi: "",
    image: "",
    id: 0,
    isShow: false,
  });

  const hadleFromBook = () => {
    setIsOpen({
      judul_buku: "",
      penulis: "",
      tgl_publikasi: "",
      image: "",
      id: 0,
      isShow: true,
    });
  };

  const handleClose = () => {
    setIsOpen((prev) => {
      return { ...prev, isShow: false };
    });
  };

  const handleCloseDelete = () => {
    setIsDelete((prev) => {
      return { ...prev, isShow: false };
    });
  };

  const handleToggleDropdown = (rowId: number) => {
    if (openDropdownId === rowId) {
      setOpenDropdownId(null);
      setIsDropdownActive(false);
    } else {
      setOpenDropdownId(rowId);
      setIsDropdownActive(true);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        openDropdownId !== null &&
        !event.target.closest(".dropdown-button")
      ) {
        setOpenDropdownId(null);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [openDropdownId]);

  const columns = [
    { label: "No", accessor: "nomor" },
    { label: "Judul Buku", accessor: "name" },
    { label: "Penulis", accessor: "penulis" },
    { label: "Tanggal Publikasi", accessor: "tgl" },
    { label: "Gambar", accessor: "gambar" },
    { label: "Actions", accessor: "actions" },
  ];
  let no: number = 1;
  const rows = (books.data || []).map((book: any) => ({
    nomor: no++,
    name: book.judul_buku,
    penulis: book.penulis,
    tgl: book.tgl_publikasi,
    gambar: book.image,
    actions: (
      <div
        className={`relative hover:bg-[#DFE3E8] focus:outline-none focus:ring focus:ring-violet-300 rounded-xl w-10 py-2 flex justify-center items-center ${
          openDropdownId === book.id ? "bg-[#DFE3E8]" : ""
        }`}
      >
        <HiOutlineDotsVertical
          className="w-6 h-6 cursor-pointer dropdown-button"
          onClick={() => handleToggleDropdown(book.id)}
        />
        {(openDropdownId === book.id) ===
          // && book.is_active_direktorat
          true && (
          <ListGroup
            className={`'top-10 right-10 z-10'} w-48 bg-white rounded-md absolute shadow-lg`}
          >
            <ListGroup.Item
              onClick={() =>
                setIsOpen((prevState) => ({
                  ...prevState,
                  judul_buku: book.judul_buku,
                  id: book.id,
                  isShow: true,
                }))
              }
            >
              Edit
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() =>
                setIsDelete((prevState) => ({
                  ...prevState,
                  judul_buku: book.judul_buku,
                  id: book.id,
                  isShow: true,
                }))
              }
            >
              Hapus
            </ListGroup.Item>
          </ListGroup>
        )}
      </div>
    ),
  }));

  const handleGetData = async () => {
    try {
      setLoading(true);

      await dispatch(doRequestGetBook());

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("An error occurred:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
  }, [dispatch, refresh]);

  return (
    <>
      <div className="flex justify-between my-3 ">
        <div className="text-lg">Book</div>
        <Button
          // size={`${isMobile ? "sm" : "md"}`}
          onClick={hadleFromBook}
          className="flex justify-center text-center shadow-md ml-auto"
        >
          <p>Add</p>
          <HiOutlinePlus className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div className="text-xl">
        <Tables rows={rows} columns={columns} loading={loading} />
      </div>

      {isOpen.isShow ? (
        <Modals
          header={`${isOpen.id ? "Update book" : "Create new book"}`}
          handleClose={handleClose}
        >
          <FormBook
            id={isOpen.id}
            onClose={setIsOpen}
            judul_buku={isOpen.judul_buku}
            penulis={isOpen.penulis}
            image={isOpen.image}
          />
        </Modals>
      ) : null}

      {isDelete.isShow ? (
        <Modals header="Delete book" handleClose={handleCloseDelete}>
          <FormDelete
            id={isDelete.id}
            onClose={setIsDelete}
          />
        </Modals>
      ) : null}
    </>
  );
};

export default Dashboard;

