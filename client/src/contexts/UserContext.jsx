import { createContext,useContext } from "react";

export const UserContext = createContext(
    {
        _id: '',
        email: '',
        username: '',
        accessToken: '',
        userLoginHandler: () => null,
        userLogoutHandler: () => null
    }
);

/*
UserContext - Context object created using React.createContext() method.

*/

export function useUserContext(){
    const data = useContext(UserContext)
    // useContext - React Hook that lets you read and subscribe to
    //              context from your component
    console.log('Data from useUserContext is:', data)

    return data
}