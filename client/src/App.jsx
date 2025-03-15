import { Routes,Route } from 'react-router'

import './App.css'

import Header from '../components/header/Header'
import HomePage from '../components/home/HomePage'

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
        </Routes>
      </main>
    </div>
    </>
  )
}

export default App
