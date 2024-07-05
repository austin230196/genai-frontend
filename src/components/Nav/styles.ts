import styled from "styled-components"


export const NavWrapper = styled.nav`
    width: 100%;
    top: 0;
    left: 0;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.secondary};
    box-shadow: 0px 2px 5px #eee;
    padding-inline: 20px;
`;


export const WidthWrapper = styled.div`
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-inline: auto;

    > a {
        text-decoration: none;
    }
`;

export const NavItems = styled.div`
    > a {
        text-decoration: none;
        color: ${props => props.theme.text};
    }
`;

export const Hamburger = styled.span`
    display: none;
    align-items: center;
    justify-content: center;
    padding: 5px;
    cursor: pointer;

    > svg {
        font-size: 1.3rem;
    }

    @media screen and (max-width: 864px) {
        display: flex;
    }
`

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.6);
    z-index: 101;
`