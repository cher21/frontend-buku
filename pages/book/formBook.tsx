import React, { useEffect, useState } from "react";
import { Label, Select, TextInput } from "flowbite-react";
import { FieldErrors, Resolver, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { schemaBook } from "./validate";
import { doAddBook, updateBook } from "@/redux/action/actionBook";
import { yupResolver } from "@hookform/resolvers/yup";

interface Book {
  id: number;
  judul_buku: string;
  penulis: string;
  image: string;
  onClose: any;
}

export const FormBook: React.FC<Book> = ({
  id,
  judul_buku,
  penulis,
  image,
  onClose,
}) => {
  const dispatch = useDispatch();

  type Book = {
    judul_buku: string;
    penulis: string;
    image: FileList;
  };

  const handleBook = async (data: Book) => {
    // const result = {
    //   judul_buku: data.judul_buku,
    //   penulis: data.penulis,
    //   image: data.image,
    // };
    // console.log(result);

    const formData = new FormData();
    formData.append("Judul_buku", data.judul_buku);
    formData.append("Penulis", data.penulis);
    formData.append("Image", data.image[0]);

    console.log("Data Form:", {
      Judul_buku: data.judul_buku,
      Penulis: data.penulis,
      Image: data.image[0]?.name,
    });

    if (id) {
      const payload = {
        id,
        formData,
        // result,
      };
      console.log("==>", payload)
      dispatch(updateBook(payload));
      onClose({ isShow: false });
    } else {
      dispatch(doAddBook(formData));
      onClose({ isShow: false });
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Book>({
    resolver: yupResolver(schemaBook) as unknown as Resolver<Book>,
  });

  return (
    <div className="font-poppins-regular">
      <form onSubmit={handleSubmit(handleBook)}>
        <div>
          <div className="mb-2 block pt-3.5">
            <Label htmlFor="Judul_buku" value="Judul Buku" />
          </div>
          <TextInput
            id="small"
            sizing="md"
            type="text"
            placeholder="Judul Buku"
            {...register("judul_buku")}
            defaultValue={judul_buku}
          />
          {errors?.judul_buku && (
            <p className="text-xs text-amber-700">
              {errors.judul_buku.message}
            </p>
          )}
        </div>

        <div>
          <div className="mb-2 block pt-3.5">
            <Label htmlFor="Penulis" value="Penulis" />
          </div>
          <TextInput
            id="small"
            sizing="md"
            type="text"
            placeholder="Penulis"
            {...register("penulis")}
            defaultValue={penulis}
          />
          {errors?.penulis && (
            <p className="text-xs text-amber-700">{errors.penulis.message}</p>
          )}
        </div>

        <div>
          <div className="mb-2 block pt-3.5">
            <Label htmlFor="image" value="Image" />
          </div>
          <input
            id="small"
            type="file"
            placeholder="Image"
            {...register("image")}
            onChange={(e) => {
              const file = e.target.files?.[0];
              console.log("Selected File:", file?.name);
            }}
          />

          {errors?.image && (
            <p className="text-xs text-amber-700">{errors.image.message}</p>
          )}
        </div>

        <div className="w-full flex justify-end font-poppins-regular pt-4">
          <button
            className="bg-green-500 text-sm w-20 h-9 text-[#FFFFFF] hover:bg-secondary"
            style={{ borderRadius: "5px" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
