import {useMutation} from "@tanstack/react-query";
import { gainAccess, sendQuery, uploadDocument } from "./api";



export const useChat = () => {
    return useMutation({
        mutationFn: async(data: {query: string, file_id: string}) => await sendQuery(data.file_id, data.query),
        mutationKey: ['chat']
    })
}


export const useUploadDocument = () => {
    return useMutation({
        mutationKey: ["upload-document"],
        mutationFn: async(formdata: FormData) => await uploadDocument(formdata)
    })
}


export const useAccess = () => {
    return useMutation({
        mutationKey: ["gain-access"],
        mutationFn: async(data: {email: string; password: string}) => await gainAccess(data.email, data.password)
    })
}