import { useLogout } from "../../src/api/authApi"
import { Navigate } from "react-router"

export default function Logout(){

   const { isLoggedOut } = useLogout()

    return isLoggedOut
                 ?
           <Navigate to="/" />
                  :
                 null
}