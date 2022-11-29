import { BrowserRouter, Route, Routes } from "react-router-dom"
import Beer from "./Beer"
import Navbar from "./components/Navbar"
import Contacto from "./Contacto"
import Home from "./Home"

function App() {
  return (
   <div>
    
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/beer/:id' element={<Beer/>}/>
          <Route path='/contact' element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
