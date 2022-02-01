import { createContext } from "react";
import { iAction, iContext, iState, iType } from "../interfaces";

export const initialState: iState = {
    email: "",
    user: null,
    isAuth: false,
};

export const reducer = (state: iState, action: iAction) => {
    const { type, payload } = action;
    const { SET_EMAIL, SET_IS_AUTH, SET_USER } = iType;
    switch (type) {
        case SET_EMAIL:
            return {
                ...state,
                email: payload,
            };
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: payload,
            };
        case SET_USER:
            return {
                ...state,
                user: payload,
                email: payload ? payload.email : "",
            };
        default:
            return state;
    }
};
export const MainContext = createContext<iContext>({
    state: initialState,
    dispatch: () => 0,
});
