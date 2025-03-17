import Layout from './components/Layout'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Website from './pages/Website'
import Monitoring from './pages/Monitoring'
import Signin from './components/Signin'
import Signup from './components/Signup.jsx'
import CreateMonitor from './pages/CreateMonitor'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />} >
            <Route path='/' element={<Website />} />
          </Route>
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/monitoring' element={<Monitoring />} />
          <Route path='/monitoring/createMonitor' element={<CreateMonitor />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
