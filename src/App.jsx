import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Router, Routes,Route, Link} from 'react-router-dom'
import { Home } from './Pages/Home.jsx'
import { ContactForm } from './Pages/Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  
    
      <Routes>
        {/* Add the routes for the Home and Contact components here */}
        <Route path="/" element={<Home />} />
        {/* Links the (/contact) path to the Contact component */}
        <Route path="/contact" element={<ContactForm />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
