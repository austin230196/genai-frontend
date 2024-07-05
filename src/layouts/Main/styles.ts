import styled from "styled-components";



export const MainLayoutWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 260px 1fr;

    > section {
        @media screen and (max-width: 864px) {
            display: none;
        }
    }
    
    @media screen and (max-width: 864px) {
        grid-template-columns: 1fr;
    }
`;


export const MainLayoutContent = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 30px;
    padding-bottom: 20px;
    overflow-y: hidden;
`;

export const MainLayoutBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`