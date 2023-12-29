import axios from "../config/endpoint";

const getBook = () => {
    return axios.get("/api/buku");
}

const addBook = (data: any) => {
    return axios.post("/api/buku", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

const updateBook = async (id: number, data: any) => {
    try {
        console.log("data -->",data)
        const response = await axios.put(`/api/buku/${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
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