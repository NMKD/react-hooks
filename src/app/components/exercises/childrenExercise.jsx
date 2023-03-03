import React from "react";
import CollapseWrapper from "../common/collapse";

const ListComponent = ({ children }) => {
    const data = React.Children.toArray(children);
    return React.Children.map(data, (child) => {
        const str = child.key;
        const num = Number(str.replace(".", "")) + 1;
        return (
            <div className="d-flex">
                <span className="mx-2">{num}</span>
                {child}
            </div>
        );
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
