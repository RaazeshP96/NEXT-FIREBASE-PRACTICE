import { Spin } from "antd";
import { getAuth } from "firebase/auth";
import router from "next/router";
import React, { useEffect } from "react";
import app from "./firebase";
const auth = getAuth(app);
const user = auth.currentUser;
const PrivateRoute = (AuthenticatedComponent: any) => {
    function PrivateComponent({ children }: any) {
        useEffect(() => {
            const { pathname } = router;
            if (user !== null && pathname == "/") {
                router.push("/home");
            } else {
                router.push("/login");
            }
        }, []);

        if (user !== null) {
            return <>{children}</>;
        }
        return <Spin></Spin>;
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
