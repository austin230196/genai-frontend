import { TooltipWrapper } from "./styles";

type ITooltip = {
    text: string;
    left?: number;
    right?: number;
    bottom?: number;
}

const Tooltip = ({text, left, right, bottom}: ITooltip) => (
    <TooltipWrapper $left={left} $right={right} $bottom={bottom}>
        {text}
    </TooltipWrapper>
)


export default Tooltip;