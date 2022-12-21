import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth-context";

const useAuthContextHook = () => {
    const authContext = useContext(AuthContext);
    
    useEffect(() => {
        authContext.auth()
    },[])

    return authContext;
}

export default useAuthContextHook;