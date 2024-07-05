import styled from "styled-components";



export const FooterWrapper = styled.footer`
    width: 100%;
    display: flex;
    left: 0;
    bottom: 0;
    background-color: ${props => props.theme.info};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    gap: 15px;
    
    > p, > a {
        font-weight: 700;
    }
`;