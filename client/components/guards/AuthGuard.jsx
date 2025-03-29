import useAuth from "../../src/hooks/useAuth";
import { Outlet } from "react-router";

export default function AuthGuard(
    {children}
){

    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login"/>
    }

    return (
        
       <Outlet />
    //    Outlet is the nested route
        
    );

}

/*
    In situations where we have nested routes
    we use Outlet
*/