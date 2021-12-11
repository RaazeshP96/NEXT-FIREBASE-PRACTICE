import { NextPage } from "next";
import PrivateRoute from "../withPrivateRoute";

const index: NextPage = () => {
    return null;
};

export default PrivateRoute(index);
