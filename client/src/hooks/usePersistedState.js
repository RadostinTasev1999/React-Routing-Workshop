import { useState } from "react"

export default function usePersistedState(key, initialState){
    const [state,setState] = useState(() => {
        const persistedState = localStorage.getItem('auth')
        if (!persistedState) {
            return initialState
        }
        //if we do not have key 'auth' in local storage, we return initial state

        const persistedStateData = JSON.parse(persistedState); // Convert JSON string into a Java Script Object 

        return persistedStateData
        // the state property will get the value which is returned from the callback function

    });

    const setPersistedState = (input) => {
        // TODO: todo update local storage

        const data = typeof input === 'function' ? input(state) : input;

        const persistedData = JSON.stringify(data); 
        
        // Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

        localStorage.setItem('auth', persistedData)

        setState(data);
    }

    

    return [
        state,
        setPersistedState
    ]
}