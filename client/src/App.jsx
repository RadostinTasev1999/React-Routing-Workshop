import { Routes,Route } from 'react-router'

import './App.css'

import Header from '../components/header/Header'
import HomePage from '../components/home/HomePage'
import Login from '../components/login/Login'
import Register from '../components/register/register'
import Create from '../components/create/Create'
import Edit from '../components/Edit/Edit'
import Catalog from '../components/catalog/Catalog'
import GameDetails from '../components/game-details/GameDetails'

// import { Routes, Route, Router } from 'react-router'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div id="box">
      <Header />
      {/* Main content */}
      <main id="main-content">
        <Routes>
          <Route index element={<HomePage />}  />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<Create />} />
          <Route path='/games/:gameId/edit' element={<Edit />} />
          <Route path='/games' element={<Catalog />} />
          <Route path='/games/:gameId/details' element={<GameDetails />} />
        </Routes>
      </main>
    </div>
    </>
  )
}

export default App
