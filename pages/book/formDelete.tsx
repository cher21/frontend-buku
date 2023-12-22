import React from "react";
import { Label } from "flowbite-react";
import { useDispatch } from "react-redux";
import { deleteBook } from "@/redux/action/actionBook";

interface Book {
  id: number;
  onClose: any;
}

export const FormDelete: React.FC<Book> = ({
  id,
  onClose,
}) => {
  const dispatch = useDispatch();

  const handleDelete = async (id: number) => {
    dispatch(deleteBook(id));
    onClose({ isShow: false });
  };

  return (
    <div className="font-poppins-regular">
      <div className="mb-2 block pt-3.5">
        <Label htmlFor="Judul_buku" value="Yakin hapus?" />
      </div>
      <div className="w-full flex justify-end font-poppins-regular pt-4">
        <button
          onClick={() => handleDelete(id)}
          className="bg-green-500 text-sm w-20 h-9 text-[#FFFFFF] hover:bg-secondary"
          style={{ borderRadius: "5px" }}
        >
          Ya
        </button>
      </div>
    </div>
  );
};
