import { useContext } from "react";
import { userTypeContext, userNameContext } from "./userContext";

export default function Contexts() {
    const contexts = {
        userTypeContext: useContext(userTypeContext),
        userNameContext: useContext(userNameContext)
    }
    return contexts;
}