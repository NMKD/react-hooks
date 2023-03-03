import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const refElementDom = useRef(null);
    const handleWidth = () => {
        refElementDom.current.style.width = "150px";
        refElementDom.current.style.height = "80px";
        refElementDom.current.textContent = "useRef";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={refElementDom}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-success mt-3 mx-2" onClick={handleWidth}>
                Change width
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
