import axios from "../config/endpoint";

const getBook = () => {
    return axios.get("/api/buku");
}

const addBook = (data: any) => {
    return axios.post("/api/buku", data)
}

const updateBook = async (id: number, data: any) => {
    try {
        const response = await axios.put(
            `/api/buku/${id}`,
            data
        );
        return response;
    } catch (error: any) {
        return error.response;
    }
}

const deleteBook = (id: number) => {
    return axios.delete(`/api/buku/${id}`);
}

const ApiMethod = {
    getBook,
    addBook,
    updateBook,
    deleteBook
}

export default ApiMethod