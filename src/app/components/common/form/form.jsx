import React, { useState, useEffect } from "react";
import { validator } from "../../../utils/validator";
import PropTypes from "prop-types";
const FromComponent = ({
    children,
    validatorConfig,
    onSubmit,
    defaultData
}) => {
    const [data, setData] = useState(defaultData || {});
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validate = () => {
        if (data === null || Object.keys(data).length === 0) return;
        setErrors(validator(data, validatorConfig));
    };

    const isValid = Object.keys(errors).length !== 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) return;
        onSubmit(data);
    };

    useEffect(() => {
        if (data === null || Object.keys(data).length === 0) return;
        validate();
    }, [data]);

    const clonedElements = React.Children.map(children, (child) => {
        const typeChild = typeof child.type;
        let config = {};
        if (typeChild === "function") {
            config = {
                ...child.props,
                onChange: handleChange,
                value: data[child.props.name] || "",
                error: errors[child.props.name] || ""
            };
        }
        if (typeChild === "string") {
            if (
                (child.type === "button" && child.props.type === "submit") ||
                (child.type === "button" && child.props.type === undefined)
            ) {
                config = { ...child.props, disabled: isValid };
            }
        }
        return React.cloneElement(child, config);
    });
    return <form onSubmit={handleSubmit}>{clonedElements}</form>;
};

FromComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    validatorConfig: PropTypes.object,
    onSubmit: PropTypes.func,
    defaultData: PropTypes.object
};
export default FromComponent;
