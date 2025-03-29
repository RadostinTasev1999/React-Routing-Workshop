import usePersistedState from '../hooks/usePersistedState.js'
import { UserContext } from '../contexts/UserContext.jsx';

export default function UserProvider(
    {
        children
    }
){

    const [authData, setAuthData] = usePersistedState('auth', {});

    console.log('authData is:', authData)
/*
{
email: 'peter@abv.bg',
 _id: '35c62d76-8152-4626-8712-eeb96381bea8',
  accessToken: 'fbea11b16a5959f5553df472a8b608937fabe2f15ec09968694e1b5ceaf13f52'
}
*/

   /*
   We use userPersistedState in order to manage the state of authData and
   persist it in the browser's localStorage
   */
    
    const userLoginHandler = (resultData) => {
      setAuthData(resultData)
    }
  
    const userLogoutHandler = (resultData) => {
      setAuthData(resultData)
    }

    return (
        <UserContext.Provider value={{...authData,userLoginHandler,userLogoutHandler}}>
            {children}
        </UserContext.Provider>
    );

/*
    we provide the specified properties and functions to all compontents (children) inside
    the UserProvider.
    UserContext.Provider - part of the React Context API that
    allows you to share data and functionality such as state or functions
    across multiple components in your app, without having to 
    pass props down manually through every level of the component
    tree.
    
*/
}
