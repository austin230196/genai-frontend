import {queryOptions, useQuery} from "@tanstack/react-query"
import { getDocumentQueries, getDocuments } from "./api"


export const useFiles = () => {
    return useQuery({
        queryKey: ["files"],
        queryFn: async()=> await getDocuments() 
    })
}

export const getFileQueries = (file_id: string) => {
    return queryOptions({
        queryKey: ["file-queries"],
        queryFn: async() => await getDocumentQueries(file_id)
    })
}