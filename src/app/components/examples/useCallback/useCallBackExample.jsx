import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const refWithOutCallback = useRef(0);
    const refCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validateWithOutCallback = (data) => {
        console.log("validateWithOutCallback");
    };

    const validateCallback = useCallback((data) => {
        console.log("validateCallback");
    }, []);

    useEffect(() => {
        validateWithOutCallback(data);
        validateCallback(data);
    }, [data]);

    useEffect(() => {
        refWithOutCallback.current++;
    }, [validateWithOutCallback]);

    useEffect(() => {
        refCallback.current++;
    }, [validateCallback]);

    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            <p>Render without callback: {refWithOutCallback.current}</p>
            <p>Render with callback: {refCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleChange}
                value={data.email || ""}
                name="email"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
