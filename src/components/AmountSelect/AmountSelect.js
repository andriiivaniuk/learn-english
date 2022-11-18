import { useState } from "react";

import { 
    AmountSelectStyled,
    AmountSelectTitle,
    MainAmountWrapper,
    AmountArrow,
    ArrowImg,
    AmountValue,
    AmountArrowRight
} from "./AmountSelectStyled";

import amountArrow from "../../assets/images/amountArrow.svg"

function AmountSelect({min, max, title}) {

    const [currentVal, setCurrentVal] = useState(min);

    return (
        <AmountSelectStyled>
            <AmountSelectTitle>
                {title}
            </AmountSelectTitle>
            <MainAmountWrapper>
                <AmountArrow>
                    <ArrowImg src = {amountArrow} />
                </AmountArrow>
                <AmountValue>
                    {currentVal}
                </AmountValue>
                <AmountArrowRight>
                    <ArrowImg src = {amountArrow} />
                </AmountArrowRight>
            </MainAmountWrapper>
        </AmountSelectStyled>
    );
}

export default AmountSelect;