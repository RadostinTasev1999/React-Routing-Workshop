import Header from '../components/Header'
import HomePage from '../components/HomePage'
import './App.css'

import { Routes, Route, Router } from 'react-router'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div id="box">
      <Header />


    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        {/* 
        index element is used to define the default route for a specific path
        when no other nested routes are matched
         */}
      </Routes>
    </Router>
    </div>
    
    </>
  )
}

export default App
