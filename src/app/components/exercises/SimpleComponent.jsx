import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    console.log("SimpleComponent isAuth: ", isAuth);
    return (
        <button
            className={"btn mt-3 mx-2 btn-" + (!isAuth ? "success" : "primary")}
            onClick={!isAuth ? onLogin : onLogOut}
        >
            {!isAuth ? "Sign in" : "Sign out"}
        </button>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;
