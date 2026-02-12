import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Router, Routes,Route, Link} from 'react-router-dom'
import { Home } from './Pages/Home.jsx'
import { ContactForm } from './Pages/Contact.jsx'
import { NavDropdown } from 'react-bootstrap'
import {Navbar, Nav, Container} from 'react-bootstrap'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
   {/*React-Bootstrap Navbar component with a dropdown menu*/}
    <nav className ="Navcontainer d-flex justify-content-start gap-3">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    < div className = "Navdropdown-dividercontainer d-flex justify-content-end">
    <button className="btn btn-secondary Navdropdown-toggle" type="button" id="NavdropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Dropdown button
</button>
<ul className="Navdropdown-menu" aria-labelledby="NavdropdownMenuButton1" font="wheat, cursive, sans-serif">
  <li><a className="Navdropdown-item" href="#">"Home"</a></li>
  <li><a className="Navdropdown-item" href="#">"Contact"</a></li>
  </ul>
    </div>  
 
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
