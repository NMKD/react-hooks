import React, { useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
export const ExampleFileInput = () => {
    const inputRef = useRef(null);
    const [isValueSet, setIsValueSet] = useState(false);

    const handleSend = () => {
        const file = inputRef.current.files;
        console.log(file);
    };

    return (
        <CardWrapper>
            <SmallTitle>Получения доступа к потомку</SmallTitle>
            <label htmlFor="file">Выберите файл</label>
            <input
                ref={inputRef}
                type="file"
                onChange={() => setIsValueSet(true)}
            />
            <Divider />
            <button onClick={handleSend} disabled={!isValueSet}>
                Отправить файл
            </button>
        </CardWrapper>
    );
};

export default ExampleFileInput;
