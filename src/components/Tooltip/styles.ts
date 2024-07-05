import styled from "styled-components";


export const TooltipWrapper = styled.span<{
    $left: number|undefined; 
    $right: number|undefined; 
    $bottom: number|undefined}
>`
    position: absolute;
    padding: 20px;
    left: ${props => props.$left ? props.$left : 0}px;
    right: ${props => props.$right ? props.$right : 0}px;
    bottom: ${props => props.$bottom ? props.$bottom : 0}px;
    background-color: rgba(0,0,0,.8);
    color: ${props => props.theme.secondary};
    font-size: 0.7rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    letter-spacing: 0.4px;
    z-index: 50;
`