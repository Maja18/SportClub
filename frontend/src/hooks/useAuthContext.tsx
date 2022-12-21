import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth-context";

const useAuthContext = () => {
    const authContext = useContext(AuthContext);
    
    useEffect(() => {
        authContext.auth()
    },[])

    return authContext;
}

export default useAuthContext;