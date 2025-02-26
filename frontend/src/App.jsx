import Layout from './components/Layout'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Website from './pages/Website'
import Monitoring from './pages/Monitoring'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />} >
            <Route path='/' element={<Website />} />
            <Route path='/monitoring' element={<Monitoring />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
