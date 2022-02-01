import { User } from "firebase/auth";

export interface iState{
    email:string
    user:User | null
    isAuth:boolean
}