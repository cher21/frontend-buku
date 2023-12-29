import { REGEX } from "@/utils/constants";
import * as yup from "yup";

export const schemaBook = yup.object({
  judul_buku: yup.string().required("Judul buku wajib diisi"),
  penulis: yup.string().required("Penulis wajib diisi"),
  // image: yup
  //   .string()
  //   .required("Image wajib diisi"),
});