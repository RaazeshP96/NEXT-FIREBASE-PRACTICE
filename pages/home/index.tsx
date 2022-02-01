import { Button, message } from "antd";
import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import router from "next/router";
import PrivateRoute from "../../withPrivateRoute";
import app from "../../services/firebase";
import { MainContext } from "../../reducer";
import { NextPage } from "next";

const auth = getAuth(app);

const Home: NextPage = () => {
    const { state } = useContext(MainContext);
    const { email } = state;

    const handleLogout = async () => {
        try {
            await signOut(auth);
            message.success("Logged out succesfully");
            router.push("/login");
        } catch (error: any) {
            message.error(error.message);
        }
    };
    return (
        <div>
            This is {email}
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
};

export default PrivateRoute(Home);
