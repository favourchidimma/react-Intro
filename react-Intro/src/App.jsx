import Components from "./pages/components"
import Home from "./pages/home"
import Login from "./pages/login"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/components" element={<Components />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
