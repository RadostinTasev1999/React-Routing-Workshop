import { useEffect } from 'react';
import request from '../utils/requester'
import { useRef } from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';


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

            //localStorage.setItem('email')
            /*
            localStorage changes do not notify React components about the change
            React does not subscribe to local storage
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

    const { accessToken, userLogoutHandler } = useContext(UserContext)

    useEffect(() => {

        if (!accessToken) {
            return;
        }

        const options = {
            headers: {
                'X-Authorization': accessToken
            }
        }

        request.get(`${baseUrl}/logout`, null, options)
            .then(() => {
                userLogoutHandler({});
            })
    },[accessToken, userLogoutHandler])

    return {
        isLoggedOut: !!accessToken // we convert accessToken to its boolean equivalent
    }

}
