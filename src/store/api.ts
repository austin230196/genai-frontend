import axios from "../axios";



const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY)


export const sendQuery = async (file_id: string, query: string) => {
    const res = await axios.post(`/chat/${file_id}`, {query}, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    return res.data;
}


export const getDocuments = async() => {
    const res = await axios.get("/files", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    return res.data;
}


export const uploadDocument = async(formdata: FormData) => {
    const res = await axios.post("/file/upload", formdata, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
        }
    })
    return res.data
}


export const getDocumentQueries = async(file_id: string) => {
    const res = await axios.get(`/query/${file_id}`, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
        }
    })
    return res.data;
}


export const gainAccess = async(email: string, password: string) => {
    const res = await axios.post("/access", {email, password}, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return res.data;
}