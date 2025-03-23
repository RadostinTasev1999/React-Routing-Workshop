import { createContext } from "react";

export const UserContext = createContext(
    {
        _id: '',
        email: '',
        username: '',
        accessToken: '',
        userLoginHandler: () => null,
        userLogoutHandler: () => null
    }
    /*
        defaultValue - the value that you want the context to have when there is no matching context
                        provider in the tree above the component that reads context.

        createContext returns a context object



    */
);