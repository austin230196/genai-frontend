import { ChangeEvent, MouseEvent, useState } from "react"
import { toast } from "react-toastify";

import { Loader, Logo } from "../../components"
import { Backdrop } from "../../components/Nav/styles";
import { FormContainer, LoginForm, LoginWrapper } from "./styles";
import { useAccess } from "../../store/mutation";
import useStore from "../../store/store";

const Login = ({close}: {close: () => void}) => {
    const [loading, setLoading] = useState(false);
    const updateUserdata = useStore((state) => state.updateUserdata);
    const [formstate, setFormstate] = useState({
        email: "",
        password: ""
    })
    const gainAccess = useAccess();

    function changeHandler(e: ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;
        setFormstate((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }

    function hideBackdrop(e: MouseEvent<HTMLDivElement>){
        if(e.target !== e.currentTarget) return;
        close();
    }

    async function gainAccessHandler(){
        setLoading(() => true);
        try{
            const res = await gainAccess.mutateAsync({...formstate})
            if(res.status !== 'success') throw new Error(res.message);
            localStorage.setItem(import.meta.env.VITE_TOKEN_KEY, res?.data?.token)
            toast(res.message, {type: "success"});
            updateUserdata(res?.data?.userdata);
            close();
        }catch(e: any){
            toast(e.message, {
                type: 'error'
            })
        }finally{
            setLoading(() => false)
        }
    }


    return (
        <Backdrop>
            <LoginWrapper onClick={hideBackdrop}>
                <LoginForm>
                    <Logo />
                    <h4>Authorize Access</h4>
                    <FormContainer>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Enter email address" value={formstate.email} onChange={changeHandler} />
                    </FormContainer>
                    <FormContainer>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter password" value={formstate.password} onChange={changeHandler} />
                    </FormContainer>
                    <FormContainer>
                        <button onClick={gainAccessHandler} disabled={loading || !formstate.email || !formstate.password}>
                            {loading ? <Loader /> : <span>Login</span>}
                        </button>
                    </FormContainer>
                </LoginForm>
            </LoginWrapper>
        </Backdrop>
    )
}


export default Login;