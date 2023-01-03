import { useEffect, useState } from "react";
import { AmountRunnerStyled } from "./AmountRunnerStyled";

function AmountRunner({max, time, children}) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        startAmountRunner(setCurrent, max, time);
    }, []);

    return <AmountRunnerStyled>
        {current.toFixed()}{children}
    </AmountRunnerStyled> 
}

function startAmountRunner(updateFunc, max, time) {
    const frameRate = 30;
    const tick = time / max / frameRate;
    let value = 0;

    setTimeout(() => {
        const interval = setInterval(() => {
            if (value >= max) {
                updateFunc(max);
                clearInterval(interval);
            } else {
                value += tick;
                if (value < max) {
                    updateFunc(value);
                }
            }
        }, frameRate);
    }, 300);
}

export default AmountRunner;