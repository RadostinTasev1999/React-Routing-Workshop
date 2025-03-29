import useAuth from "../../src/hooks/useAuth";

export default function GuestGuard() {
    const { isAuthenticated } = useAuth(); // holds the logged in user accessToken

    if (isAuthenticated) {
        return <Navigate to="/" />
    }

    return <Outlet />;
}