import { Spin } from "antd";
import { getAuth } from "firebase/auth";
import router from "next/router";
import React, { useEffect, useState } from "react";
import app from "./firebase";
const auth = getAuth(app);
const PrivateRoute = (AuthenticatedComponent: any) => {
    function PrivateComponent({ children }: any) {
        const [authUser, setauthUser] = useState<boolean>(false);

        useEffect(() => {
            auth.onAuthStateChanged(async (user) => {
                const { pathname } = router;
                await user;
                setauthUser(user !== null);
                if (user !== null) {
                    pathname === "/" || pathname === "/home"
                        ? router.push("/home")
                        : router.push(pathname);
                } else {
                    auth.signOut();
                    router.push("/login");
                }
            });
        }, []);

        return authUser ? <>{children}</> : <Spin></Spin>;
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
