import Header from "./Components/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Outlet } from "react-router-dom"
function App() {
 

  return (
    <>
    <div className="container-fuild header">
      <Outlet/>
    </div>
    </>
  )
}

export default App
