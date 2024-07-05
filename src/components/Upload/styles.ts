import styled from "styled-components";



export const UploadForm = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    margin-top: 100px;
    border-radius: 8px;
    background-color: ${(props: any) => props.theme.secondary};
    box-shadow: 0px 2px 5px #ccc;
`

export const UploadWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background-color: rgba(0,0,0,.4);
`

export const FormTop = styled.div`
    width: 100%;
    border-bottom: 1px solid ${(props: any) => props.theme.infoLight};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 5px;
    padding-inline: 15px;

    > h2 {
        font-size: 1.1rem;
        text-align: center;
        flex: 1;
        text-transform: uppercase;
        font-weight: 500;
    }
`

export const IconButton = styled.span`
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
        font-size: 1.5rem;
    }

    &:hover {
        background-color: rgba(0,0,0,.05);
    }
`;


export const FormBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;

    & span {
        font-family: 'Courier New', Courier, monospace;
    }

    > section {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > div {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
`;

export const FileBox = styled.div`
    width: 100%;
    padding: 20px;
    min-height: 200px;
    border-radius: 8px;
    border: 1px dashed ${(props: any) => props.theme.background};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    transition: all 0.8s ease-in-out;

    & p {
        font-family: 'Courier New', Courier, monospace;
        font-size: 1rem;
        text-transform: uppercase;
        margin-block: 5px;
        color: ${(props: any) => props.theme.background};
    }

    & span {
        color: ${(props: any) => props.theme.textLight};
        font-size: 0.8rem;
    }

    & svg {
        font-size: 5rem;
        color: ${(props: any) => props.theme.background};
        transition: all 0.8s ease-in-out;
    }

    &:hover {
        border-color: ${(props: any) => props.theme.primary};

        & svg {
            color: ${(props: any) => props.theme.primary}
        }

        & p {
            color: ${(props: any) => props.theme.primary}
        }
    }
`;


export const Button = styled.button`
    color: ${(props: any) => props.theme.text};
    padding: 8px 40px;
    cursor: ${(props: any) => props.disabled ? 'not-allowed' : 'pointer'};
    border: none;
    background-color: ${(props: any) => props.theme.primary};
    color: ${(props: any) => props.theme.text};
    opacity: 1;
    font-size: 0.75rem;


    &:disabled{
        opacity: 0.6;
    }
`

export const Input = styled.input`
    flex: 1;
    background-color: transparent;
    border: none;
    outline: none;
    line-height: 2;
    padding:4px;
    color: ${(props: any) => props.theme.text};
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 0.6px;
    display: none;
`;


export const AllowedType = styled.span`
    background-color: ${props => props.theme.infoLight};
    padding: 6px 18px;
    border-radius: 25px;
    text-transform: uppercase;
    font-size: 0.75rem;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.4px;
`;


export const Preview = styled.iframe`
    margin-bottom: 20px;
`;