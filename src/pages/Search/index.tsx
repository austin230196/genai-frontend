import {toast} from "react-toastify";
import { FaRunning, FaUpload } from "react-icons/fa";

import { useChat } from "../../store/mutation";
import { MainLayout } from "../../layouts"
import { useState } from "react";
import { ChatBox, ChatButton, ChatInput, EmptyChat, LoadedDocumentConmtainer, MessageBox, QueryAnswer, QueryContainer, QueryQuestion, RelativeContainer, SearchWrapper } from "./styles";
import { Logo, Tooltip, Upload } from "../../components";
import useStore from "../../store/store";
import Login from "../Login";
import { useQueryClient } from "@tanstack/react-query";
import { getFileQueries } from "../../store/query";

const Search = () => {
    const token = useStore((state) => state.token)
    const [query, setQuery] = useState("");
    const chat = useChat();
    const [showUpload, setShowUpload] = useState(false);
    const [inputTooltip, setInputTooltip] = useState(false);
    const updateQueries = useStore((state) => state.updateQueries);
    const [showLogin, setShowLogin] = useState(false);
    const file = useStore((state) => state.file);
    const queries = useStore((state) => state.queries);
    const queryClient = useQueryClient();
    const [submitting, setSubmitting] = useState(false);

    console.log({queries});

    function showUploadHandler(){
      setShowUpload(() => true)
    }

    function showLoginHandler(){
      setShowLogin(() => true);
    }

    function hideLoginHandler(){
      setShowLogin(() => false);
    }
  
    async function chatHandler(e: any){
      setSubmitting(() => true);
      e.preventDefault();
      try{
        if(!query.trim()) throw new Error("Invalid message");
        const res = await chat.mutateAsync({file_id: file!.id, query});
        console.log({res});
        if(res.status !== 'success') throw new Error(res.message);
        //then fetch the queries
        const r = await queryClient.fetchQuery(getFileQueries(file!.id));
        console.log({r});
        if(r.status !== 'success') throw new Error(r.message);
        updateQueries(r.data);
      }catch(e: any){
        toast(e.message, {type: 'error'});
      }finally{
        setSubmitting(() => false);
      }
    }


    return (
        <MainLayout>
            {
              showLogin ? <Login close={hideLoginHandler} /> : null
            }
            <SearchWrapper>
                <MessageBox>
                  {
                    queries.length ?
                    (
                      queries.map((q, i) => (
                        <>
                        <QueryContainer key={i}>
                          <QueryQuestion>
                            {q.question}
                          </QueryQuestion>
                          {
                            q.answer ? 
                            (
                              <QueryAnswer>
                                {q.answer}
                              </QueryAnswer>
                            ) : null
                          }
                        </QueryContainer>
                        </>
                      ))
                    ):
                    (
                      <EmptyChat>
                        <Logo />
                        <h3>{file ? "Start Chatting with your file" : "Upload a document to start chatting"}</h3>
                      </EmptyChat>
                    )
                  }
                </MessageBox>
                {showUpload ? <Upload close={() => setShowUpload(() => false)} /> : null}
                <ChatBox>
                    <RelativeContainer>
                      <ChatInput onMouseOver={() => setInputTooltip(() => true)} 
                      onMouseLeave={() => {
                        setTimeout(() => {
                          setInputTooltip(() => false)
                        }, 300)
                      }}
                      type="text" readOnly={!file || submitting} value={query} 
                      onChange={e => setQuery(() => e.target.value)} 
                      placeholder="Chat with your document" />
                      {inputTooltip && !file ? <Tooltip bottom={-55} text="Upload or choose a document to start chatting" /> : null}
                    </RelativeContainer>
                    <ChatButton>
                        <button disabled={submitting} onClick={!token ? showLoginHandler : showUploadHandler}>
                          <FaUpload size={15} />
                        </button>
                        <LoadedDocumentConmtainer>
                          <span>{file!?.name}</span>
                        </LoadedDocumentConmtainer>
                        <button disabled={!query || submitting} onClick={chatHandler}>
                          <FaRunning size={15} />
                        </button>
                    </ChatButton>
                </ChatBox>
            </SearchWrapper>
        </MainLayout>
    )
}




export default Search;