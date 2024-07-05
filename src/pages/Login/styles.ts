import styled from "styled-components";


export const LoginWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LoginForm = styled.div`
    padding: 30px;
    width: min(100% - 0.25rem, 500px);
    border-radius: 8px;
    background-color: ${props => props.theme.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;

    >h4 {
        margin-top: 20px;
        margin-bottom: 40px;
    }
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    margin-bottom: 20px;

    > label {
        font-size: 0.8rem;
        font-weight: 550;
    }

    > input {
        padding: 6px;
        line-height: 2;
        outline: none;
        border: 1px solid ${props => props.theme.infoLight};
        border-radius: 6px;
        font-family: inherit;
    }

    > button {
        margin-top: 20px;
        padding: 10px;
        font-family: inherit;
        cursor: pointer;
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.text};
        border: none;
        font-weight: 600;
        border-radius: 6px;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        &:disabled {
            opacity: 0.5;
        }
    }
`;