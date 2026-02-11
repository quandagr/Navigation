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
   
    <nav className ="navbar navbar-expand-lg justify-content-start gap-3">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    < div className = "dropdown-divider">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Dropdown button
</button>
<ul className="dropdown-menu" aria-labelledby="Menu Button">
  <li><a className="dropdown-item" href="#"><Home></Home></a></li>
  <li><a className="dropdown-item" href="#">Contact</a></li>
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
