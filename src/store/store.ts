import {create} from "zustand";

import {type IFile} from "../types/File";


type IUserdata = {
    id: string;
    email: string;
    created_at: string;
}

type IStore = {
    token: string|null;
    file: IFile|null;
    files: IFile[];
    queries: any[];
    userdata: IUserdata|null;
    updateFile: (data: IFile|null) => void;
    updateFiles: (data: IFile[]) => void;
    updateQueries: (data: any[]) => void;
    updateUserdata: (data: IUserdata|null) => void;
}

const useStore = create<IStore>((set) => ({
    userdata: null,
    queries: [],
    token: localStorage.getItem(import.meta.env.VITE_TOKEN_KEY),
    file: null,
    updateFile: (data) => {
        set((oldState) => {
            return {
                ...oldState,
                file: data
            }
        })
    },
    files: [],
    updateFiles(data) {
        set((oldState) => {
            return {
                ...oldState,
                files: [...data]
            }
        })
    },
    updateUserdata(data) {
        set((oldState) => {
            return {
                ...oldState,
                userdata: data
            }
        })
    },
    updateQueries(data) {
        set((oldState) => {
            return {
                ...oldState,
                queries: [...data]
            }
        })
    },
}))



export default useStore;