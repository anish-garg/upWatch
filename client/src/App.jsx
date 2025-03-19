import Layout from './components/Layout'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Website from './pages/Website'
import Monitoring from './pages/Monitoring'
import CreateMonitor from './pages/CreateMonitor'
import SignUp from './components/SignUp'
import SignIn from './components/Signin'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />} >
            <Route path='/' element={<Website />} />
          </Route>
          <Route path='/register' element={<SignUp />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/monitoring' element={<Monitoring />} />
          <Route path='/monitoring/createMonitor' element={<CreateMonitor />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
