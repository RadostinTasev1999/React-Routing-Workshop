import { useEffect } from 'react';
import request from '../src/utils/requester'
import { useRef } from 'react';

const baseUrl = 'http://localhost:3030/users'

export const useLogin = () => {

    const abortRef = useRef();
    /*
        useRef() - hook that is used to persist values across renders
                   without causing a re-render when the value changes
    */

   // const abortController = new AbortController();

    const login = async(email,password) => {
       
        const result = await request.post(`${baseUrl}/login`,{ email,password },{ signal: abortRef.current.signal } ) // we pass the signal to the fetch request.
        /*
            we use useRef hook to store a mutable reference and then accessing its signal property
            abortRef.current - reference to a mutable object.

        */

        return result;
    }

    useEffect(() => {
        const abortController = new AbortController(); // create a new AbortController
        abortRef.current = abortController; // store the abortController reference in the ref.


       return () => abortController.abort() // Clean up by aborting the controller when the component unmounts or dependencies change
       
    },[])

    return {
        login
    }
}