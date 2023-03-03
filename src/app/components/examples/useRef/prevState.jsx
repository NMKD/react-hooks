import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const [count, setCount] = useState(0);
    const [, setToggle] = useState(false);
    const prevRef = useRef(count);

    useEffect(() => {
        prevRef.current = count;
    }, [count]);

    const prevCount = prevRef.current;

    return (
        <CardWrapper>
            <SmallTitle>
                Состояние: {count}, Предыдущее состояние: {prevCount}
            </SmallTitle>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setToggle((p) => !p)}>Рендер</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
