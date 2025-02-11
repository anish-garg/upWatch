import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import ContactUs from './components/ContactUs'
import Values from './components/Values'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Values />
      {/* <ContactUs /> */}
      <Footer />
    </>
  )
}

export default App
