import styled from "styled-components";


export const SidenavWrapper = styled.div`
    width: 260px;
    height:100%;
    background-color: ${props => props.theme.infoLight};
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;


    @media screen and (max-width: 864px) {
        background-color: ${props => props.theme.info};
    }

`

export const SidenavTop = styled.div`
    margin-bottom: 100px;
`

export const SidenavBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Document = styled.div`
    width: 100%;
    padding: 10px 15px;
    border: 2px solid ${props => props.theme.primary};
    background-color: ${props => props.theme.secondary};
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap:10px;
    margin-bottom: 20px;

    &:hover {
        scale: 1.01;
        border-width: 4px;
    }

    > p {
        font-size: 0.75rem;
        font-weight: 600;
    }

    > span {
        font-size: 0.7rem;
        align-self: flex-end;
    }
`;

export const SidenavFooter = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0px;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;

    > h3 {
        margin-bottom: 10px;
    }

    > p {
        font-size: 0.8rem;
        margin-bottom: 30px;
        line-height: 1.5;
    }

    > button {
        border: none;
        padding: 10px;
        font-family: inherit;
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.secondary};
        cursor: pointer;
    }
`;