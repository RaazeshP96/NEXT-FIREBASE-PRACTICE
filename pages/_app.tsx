import type { AppProps } from "next/app";
import { useReducer } from "react";
import { initialState, MainContext, reducer } from "../reducer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <MainContext.Provider value={{ state: state, dispatch: dispatch }}>
            <Component {...pageProps} />
        </MainContext.Provider>
    );
}

export default MyApp;
