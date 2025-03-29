import { Routes,Route } from 'react-router'

import './App.css'
import { UserContext } from './contexts/UserContext'

import Logout from '../components/logout/logout'
import Header from '../components/header/Header'
import HomePage from '../components/home/HomePage'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import Create from '../components/create/Create'
import Edit from '../components/edit/Edit'
import Catalog from '../components/catalog/Catalog'
import GameDetails from '../components/game-details/GameDetails'

// import { Routes, Route, Router } from 'react-router'
//import { useState } from 'react'
import usePersistedState from './hooks/usePersistedState'

function App() {
 
  const [authData, setAuthData] = usePersistedState('auth', {});
  // we predefine authData state property and setAuthData state handler, which will
  // get thier values form usePersistedState custom hook
  
  const userLoginHandler = (resultData) => {
    setAuthData(resultData)
  }

  const userLogoutHandler = (resultData) => {
    setAuthData(resultData)
  }

  /*
  method which modifies the state of the email property
  */

  return (
    /* UserContext.Provider -
                 Wrap your components into a context provider to specify the value
                 of this context for all components inside.

    */
    <>
    <UserContext.Provider value={{...authData, userLoginHandler, userLogoutHandler}}>
    <div id="box">
      <Header />
      {/* Main content */}
      <main id="main-content">
        <Routes>
          <Route index element={<HomePage />}  />
          <Route path='/login' element={<Login  />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<Create />} />
          <Route path='/games/:gameId/edit' element={<Edit />} />
          <Route path='/games' element={<Catalog />} />
          <Route path='/games/:gameId/details' element={<GameDetails  />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </main>
    </div>
    </UserContext.Provider>
    </>
  )
}

export default App