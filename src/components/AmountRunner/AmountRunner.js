import { useEffect, useState } from "react";
import { AmountRunnerStyled } from "./AmountRunnerStyled";

function AmountRunner({max, time, resolver, children}) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        startAmountRunner(setCurrent, max, time, resolver);
    }, []);

    return <AmountRunnerStyled>
        {current.toFixed()}{children}
    </AmountRunnerStyled> 
}

function startAmountRunner(updateFunc, max, time, resolver) {
    const frameRate = 30;
    const tick = time / max / frameRate;
    let value = 0;

    setTimeout(() => {
        const interval = setInterval(() => {
            if (value >= max) {
                updateFunc(max);
                resolver(true);
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