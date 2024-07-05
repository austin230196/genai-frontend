import { useMemo, useState } from "react";
import {useQueryClient} from "@tanstack/react-query";

import useStore from "../../store/store"
import Logo from "../Logo"
import SkeletonLoader from "../SkeletonLoader";
import { Document, SidenavBody, SidenavFooter, SidenavTop, SidenavWrapper } from "./styles";
import Login from "../../pages/Login";
import { getFileQueries, useFiles } from "../../store/query";
import { toast } from "react-toastify";
import { IFile } from "../../types/File";



const Sidenav = () => {
    const token = useStore((state) => state.token)
    const updateFiles = useStore((state) => state.updateFiles);
    const updateQueries = useStore((state) => state.updateQueries);
    const updateFile = useStore((state) => state.updateFile);
    const [loading, setLoading] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const queryClient = useQueryClient();
    const {isLoading, data} = useFiles();

    const files = useMemo(() => {
        if(!token) return [];
        if(isLoading) {
            setLoading(() => true)
            return []
        }
        if(data){
            if(data.status === 'error'){
                toast(data.message, {type: 'error'});
                localStorage.removeItem(import.meta.env.VITE_TOKEN_KEY)
                setLoading(() => false)
                return []
            }else {
                updateFiles(data?.data);
                setLoading(() => false)
                return data?.data
            }
        }
    }, [isLoading])

    function close(){
        setShowLogin(() => false);
    }

    async function loadFileHandler(file: IFile){
        setLoading(() => true);
        try{
            //send the file id 
            updateFile(file);
            //then fetch the queries
            const res = await queryClient.fetchQuery(getFileQueries(file.id));
            console.log({res});
            if(res.status !== 'success') throw new Error(res.message);
            updateQueries(res.data);
        }catch(e: any){
            toast(e.message, {type: "error"})
        }finally{
            setLoading(() => false)
        }
    }

    return (
        <SidenavWrapper>
            {
                showLogin ? <Login close={close} /> : null
            }
            <SidenavTop>
                <Logo />
            </SidenavTop>
            <SidenavBody>   
                {
                } 
            </SidenavBody>
            {
                token === null ? 
                (
                    <SidenavFooter>
                        <h3>Authorize</h3>
                        <p>Upload documents and chat with your documents</p>
                        <button onClick={() => setShowLogin(() => true)}>Gain Access</button>
                    </SidenavFooter>
                ) : 
                loading ? 
                (
                    Array(5).fill(null).map((_, i) => <SkeletonLoader key={i} width={"100%"} height={70} />)
                ) :
                (
                    files.map((d: IFile, i: number) => (
                        <Document key={i} onClick={e => loadFileHandler(d)}>
                            <p>{d.name.substring(0, 20) + "...."}</p>
                            <span>{d.created_at}</span>
                        </Document>
                    ))
                )
            }
        </SidenavWrapper>
    )
}



export default Sidenav;