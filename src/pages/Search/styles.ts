import styled from "styled-components";



export const SearchWrapper = styled.div`
    width: min(100% - 0.025rem, 700px);
    margin-inline: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    position: relative;
    font-family: 'Courier New', Courier, monospace;
`

export const ChatBox = styled.div`
    border: 2px solid ${props => props.theme.primary};
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 16px 16px 0px 0px;
    gap: 5px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: ${props => props.theme.secondary};
`

export const ChatInput = styled.input`
    width: 100%;
    background-color: transparent;
    outline: none;
    line-height: 2;
    padding: 4px;
    border: none;
    flex: 1;
    font-family: 'Courier New', Courier, monospace;
`;


export const ChatButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    > button {
        border: none;
        outline: none;
        padding: 6px 24px;
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.secondary};
        cursor: pointer;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }
`;

export const RelativeContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const MessageBox = styled.div`
    overflow-y: scroll;
    width: 100%;
    height: 80vh;
    position: relative;
`;

export const EmptyChat = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h3 {
        font-size: 1rem;
        margin-top: 30px;
        text-transform: uppercase;
    }
`

export const LoadedDocumentConmtainer = styled.div`
    top: 0;
    right: 0;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
`

export const QueryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const QueryQuestion = styled.div`
    align-self: flex-end;
    padding: 20px;
    width: 60%;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
    border-radius: 8px;
    font-size: 0.8rem;
    margin-bottom: 10px;
`;

export const QueryAnswer = styled.div`
    align-self: flex-start;
    padding: 20px;
    width: 60%;
    background-color: ${props => props.theme.infoLight};
    color: ${props => props.theme.text};
    border-radius: 8px;
    font-size: 0.8rem;
`;