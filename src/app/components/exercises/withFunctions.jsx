/* eslint-disable no-unused-expressions */
import React from "react";
import Card from "../../components/common/Card";

const withFunctions = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");

    const onLogin = () => {
        console.log("onLogin ", isLogin);
        isLogin === null ? localStorage.setItem("auth", "token") : null;
    };
    const onLogOut = () => {
        console.log("onLogOut ", isLogin);
        isLogin ? localStorage.removeItem("auth") : null;
    };
    return (
        <Card>
            <Component {...{ isAuth: isLogin, onLogin, onLogOut }} />
        </Card>
    );
};

export default withFunctions;
