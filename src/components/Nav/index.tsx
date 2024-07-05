import { MouseEvent, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";


import { Backdrop, Hamburger, NavWrapper } from "./styles";
import Sidenav from "../Sidenav";



const Nav = () => {
    const [backdrop, setBackdrop] = useState(false);
    function hideBackdrop(e: MouseEvent<HTMLDivElement>){
        if(e.target !== e.currentTarget) return;
        setBackdrop(() => false);
    }
    return (
        <NavWrapper>
            {
                backdrop ? 
                (
                    <Backdrop onClick={hideBackdrop}>
                        <Sidenav />
                    </Backdrop>
                ) : null
            }
            <Hamburger onClick={() => setBackdrop(() => true)}>
                <RiMenu2Line />
            </Hamburger>
        </NavWrapper>
    )
}


export default Nav;