import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("ten func factorial");
    factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [other, setOther] = useState(false);
    const fact = useMemo(() => runFactorial(value), [value]);
    const color = other ? "primary" : "success";
    useEffect(() => {
        console.log("render");
    }, [value]);
    useEffect(() => {
        console.log("button color");
    }, [color]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <h4>Value: {value}</h4>
                <p>Result factorial: {fact}</p>
                <button
                    className="btn btn-primary my-3"
                    onClick={() => setValue((prevState) => prevState + 10)}
                >
                    Inc
                </button>
                <button
                    className="btn btn-primary my-3 mx-2"
                    onClick={() => setValue((prevState) => prevState - 10)}
                >
                    Dec
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={`btn btn-${color} mx-2`}
                    onClick={() => setOther((prevState) => !prevState)}
                >
                    Color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
