import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [other, setOther] = useState(false);
    const toogle = () => {
        setOther(!other);
    };
    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <div>
                <p>Render count: {renderCount.current}</p>
                <button className="btn btn-primary" onClick={toogle}>
                    Toogle
                </button>
            </div>
        </CardWrapper>
    );
};

export default RenderCountExample;
