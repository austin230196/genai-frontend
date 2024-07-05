import { ChangeEvent, useRef, useState } from "react";
import {AiOutlineClose, AiFillFileExclamation} from "react-icons/ai";
import {toast} from "react-toastify"

import { AllowedType, Button, FileBox, FormBody, FormTop, IconButton, Input, Preview, UploadForm, UploadWrapper } from "./styles";
import Loader from "../Loader";
import { useUploadDocument } from "../../store/mutation";
import useStore from "../../store/store";

const Upload: React.FC<{close: () => void}> = ({close}) => {
    const inputRef = useRef<HTMLInputElement|null>(null);
    const [url, setUrl] = useState<string|null>(null);
    const allowedTypes = ["pdf", "txt", "md"]
    const [file, setFile] = useState<null | File>(null);
    const updateFile = useStore((state) => state.updateFile);
    const [loading, setLoading] = useState(false);
    const upload = useUploadDocument();


    const uploadFileHandler = async (_: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        console.log("Uploading")
        setLoading(() => true);
        try{
            if(file === null) return;
            const formdata = new FormData();
            formdata.append("document", file);
            const res = await upload.mutateAsync(formdata);
            if(res.status !== 'success') throw new Error(res.message);
            toast.success(res.message);
            //then we load the doc
            updateFile(res?.data)
            toast(`${res?.data?.name} loaded`)
            close()
        }catch(e: any){
            toast(e.message, {type: 'error'})
        }finally {
            setLoading(() => false);
        }
    }

    const triggerFileHandler = (_: React.MouseEvent<HTMLDivElement>): void => {
        if(inputRef.current === null) return;
        inputRef.current.click();
    }

    function changeHandler(e: ChangeEvent<HTMLInputElement>){
        let file = e.target.files![0];
        setFile(() => file)
        setUrl(() => URL.createObjectURL(file));
    }


    return (
        <UploadWrapper>
            <UploadForm>
                <FormTop>
                    <h2>Upload File</h2>
                    <IconButton onClick={close}>
                        <AiOutlineClose size={15} />
                    </IconButton>
                </FormTop>
                <FormBody>
                    <FileBox onClick={triggerFileHandler}>
                        {file === null ? <>
                            <AiFillFileExclamation />
                            <p>Select a file to upload</p>
                            <span>or drag and drop it here</span>
                        </> 
                        :
                        <>
                            <Preview src={url!} />
                            <span style={{textAlign:'center', marginBottom: 10}}>{file.name}</span>
                        </>
                        }
                    </FileBox>
                    <section>
                        <div>
                            {
                                allowedTypes.map((d, i) => <AllowedType key={i}>{d}</AllowedType>)
                            }
                        </div>
                        {
                            file ? 
                            <Button onClick={uploadFileHandler}>
                                {
                                    loading ? <Loader /> : <span>Upload</span>
                                }
                            </Button> : null
                        }
                    </section>
                    <Input ref={inputRef} accept=".pdf,.md,.txt" onChange={changeHandler} type="file" name="file"  />
                </FormBody>
            </UploadForm>
        </UploadWrapper>
    )
}




export default Upload;