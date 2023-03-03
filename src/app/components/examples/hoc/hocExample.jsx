import React from "react";
import Component from "./someComponent";
import withLogin from "./withLogin";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withPropsStyle from "./withPropsStyle";

const HOCExample = () => {
    const ComponentWithAuth = withLogin(Component);
    const ComponentsWithPropsStyle = withPropsStyle(Component);
    const NewComponent = withPropsStyle(ComponentWithAuth);
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWithAuth />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <Divider />
                <ComponentsWithPropsStyle />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <Divider />
                <NewComponent />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
