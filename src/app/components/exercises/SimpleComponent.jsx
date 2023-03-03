import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    console.log("SimpleComponent isAuth: ", isAuth);
    return (
        <>
            {!isAuth ? (
                <button className="btn btn-success mt-3 mx-2" onClick={onLogin}>
                    Sign in
                </button>
            ) : (
                <button
                    className="btn btn-primary mt-3 mx-2"
                    onClick={onLogOut}
                >
                    Sign out
                </button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;
