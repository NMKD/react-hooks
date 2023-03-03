import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
import PropTypes from "prop-types";
import TextField from "../../common/form/textField";

const FormComponent = ({ children }) => {
    const [data, setData] = useState();
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    return React.Children.map(children, (child) => {
        console.log(child.props);
        const config = {
            ...child.props,
            onChange: handleChange,
            value: data ? data.name : ""
        };

        return React.cloneElement(child, config);
    });
};
const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider />
            <FormComponent>
                <TextField name="email" label="email" />
                <TextField name="password" label="password" type="password" />
            </FormComponent>
        </CardWrapper>
    );
};

FormComponent.propTypes = {
    children: PropTypes.node
};

export default ReactChildrenExample;
