import { Routes,Route } from 'react-router'

import './App.css'
import UserProvider from './providers/UserProvider'

import Logout from '../components/logout/logout'
import GuestGuard from '../components/guards/GuestGuard'
import Header from '../components/header/Header'
import HomePage from '../components/home/HomePage'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import Create from '../components/create/Create'
import Edit from '../components/edit/Edit'
import Catalog from '../components/catalog/Catalog'
import GameDetails from '../components/game-details/GameDetails'
import AuthGuard from '../components/guards/AuthGuard'

// import { Routes, Route, Router } from 'react-router'
//import { useState } from 'react'
//import usePersistedState from './hooks/usePersistedState'

function App() {
  /*
  method which modifies the state of the email property
  */

  return (
    /* UserContext.Provider -
                 Wrap your components into a context provider to specify the value
                 of this context for all components inside.

    */
    <>
     {/* We use UserProvider which uses the React Context API */}
    <UserProvider>
    <div id="box">
      <Header />
      {/* Main content */}
      <main id="main-content">
        <Routes>
          <Route index element={<HomePage />}  />
          
          <Route  element={<AuthGuard />}>
            <Route path='/create' element={<Create />} />
            <Route path='/games/:gameId/edit' element={<Edit />} />
            <Route path='/logout' element={<Logout />} />
          </ Route>
          <Route element={<GuestGuard />}>
            <Route path='/login' element={<Login  />} />
            <Route path='/register' element={<Register />} />
          </Route>
          
          <Route path='/games' element={<Catalog />} />
          <Route path='/games/:gameId/details' element={<GameDetails  />} />
          
        </Routes>
      </main>
    </div>
    </ UserProvider>

    </>
  )
}

export default App