/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
const SignOutButton = ({ onSignOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-success" onClick={onSignOut}>
            Sign out
        </button>
    );
};

SignOutButton.propTypes = {
    onSignOut: PropTypes.func
};

const MemoizedSignOutButton = React.memo(SignOutButton);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleSignOut = useCallback(() => {
        console.log("MemoWithUseCallbackExample");
        localStorage.removeItem("auth");
    }, [props]);

    return (
        <>
            <MemoizedSignOutButton onSignOut={handleSignOut} />
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                initiate rerender
            </button>
        </>
    );
};

export default MemoWithUseCallbackExample;
