import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { request } from "../utils/requester";

export default function useAuth() {

    const authData = useContext(UserContext)

    

    const requestWrapper = (method, url, data, options = {}) => {
        
        const optionWrapper = {
            ...options,
            headers: {
                'X-Authorization': authData.accessToken,
                ...options.headers
            }
        }

        return request.baseRequest(method, url, data, optionWrapper)
    };

    return {
        
        ...authData,
        request: {
            get:requestWrapper.bind(null,'GET'),
            post: requestWrapper.bind(null,'POST'),
            put: requestWrapper.bind(null,'PUT'),
            delete: requestWrapper.bind(null,'DELETE')
        }
    }

}
/*
useAuth hook provides the request object that contains methods for HTTP requests
each of these methods is created by calling requestWrapper with the corresponding 
HTTP method.
requestWrapper function is a utility function that wraps around request.baseRequest(),
which is presumably a function that makes the actual HTTP request
*/