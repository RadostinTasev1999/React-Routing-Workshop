import { useEffect } from 'react';
import request from '../src/utils/requester'
import { useRef } from 'react';
import { useContext } from 'react';
import { UserContext } from '../src/contexts/UserContext';

const baseUrl = 'http://localhost:3030/users'

export const useLogin = () => {

    const abortRef = useRef(new AbortController());

    console.log('abortRef:', abortRef)

    /*
        abortRef = current: AbortController {signal: AbortSignal}
    */
    /*
        useRef() - React Hook that lets you reference a value that is not needed for rendering.
                 - returns an object with a single property.



    */

  //  console.log('abortRef.current.signal',abortRef.current.signal)

    //{aborted: false, reason: undefined, onabort: null}
  

    const login = async(email,password) => {
       
        const result = await request.post(`${baseUrl}/login`,{ email,password },{ signal: abortRef.current.signal } ) // we pass the signal to the fetch request.
        /*
            we use useRef hook to store a mutable reference and then accessing its signal property
            abortRef.current - reference to a mutable object.

        */

        return result;
    }

    useEffect(() => {

      const abortController = abortRef.current;
        

       return () => abortController.abort()// Clean up by aborting the controller when the component unmounts or dependencies change
       
    },[])

    return {
        login
    }
}

export const useRegister = () => {
   
    const register = async (email,password) => {
       
        const response = await request.post(`${baseUrl}/register`,{email,password})
       
        return response;
    }
        
    return {
        register
    };
}

export const useLogout = () => {

    const { accessToken } = useContext(UserContext)

    const options = {
        headers: {
            'X-Authorization': accessToken
        }
    }
    const logout = () => {
        request.get(`${baseUrl}/logout`, null, options)
    }

    return {
        logout
    }
}
