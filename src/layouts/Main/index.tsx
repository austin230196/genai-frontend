import { ReactNode } from "react";

import {Nav, Sidenav } from "../../components";
import { MainLayoutBody, MainLayoutContent, MainLayoutWrapper } from "./styles";


const MainLayout = ({children}: {children: ReactNode}) => {
    return (
        <MainLayoutWrapper>
            <section>
                <Sidenav />
            </section>
            <MainLayoutBody>
                <Nav />
                <MainLayoutContent>
                    {children}
                </MainLayoutContent>
            </MainLayoutBody>
        </MainLayoutWrapper>
    )
}


export default MainLayout;