import { Spin } from "antd";
import { getAuth } from "firebase/auth";
import router from "next/router";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { iType } from "./interfaces";
import { MainContext } from "./reducer";
import app from "./services/firebase";
const auth = getAuth(app);

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    justify-content: center;
`;

const PrivateRoute = (AuthenticatedComponent: any) => {
    function PrivateComponent({ children }: any) {
        const { state, dispatch } = useContext(MainContext);
        const { SET_EMAIL, SET_IS_AUTH, SET_USER } = iType;
        const { isAuth } = state;

        useEffect(() => {
            auth.onAuthStateChanged(async (user) => {
                const { pathname } = router;
                await user;
                dispatch({ type: SET_IS_AUTH, payload: user !== null });
                dispatch({ type: SET_USER, payload: user });
                if (user !== null) {
                    dispatch({ type: SET_EMAIL, payload: user.email });
                    pathname === "/" || pathname === "/home"
                        ? router.push("/home")
                        : router.push(pathname);
                } else {
                    auth.signOut();
                    router.push("/login");
                }
            });
        }, []);

        return isAuth ? (
            <>{children}</>
        ) : (
            <Wrapper>
                <Spin tip="loading..." size="large" />
            </Wrapper>
        );
    }
    return class HOC extends React.Component {
        render() {
            return (
                <PrivateComponent>
                    <AuthenticatedComponent {...this.props} />
                </PrivateComponent>
            );
        }
    };
};

export default PrivateRoute;
