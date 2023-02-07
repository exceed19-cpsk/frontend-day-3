import {
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar'
import AddPlace from "./pages/AddPlace";
import Cafe from "./pages/Cafe";
import Cafes from "./pages/Cafes";
import Home from './pages/Home'
import Restaurant from "./pages/Restaurant";
import Restaurants from "./pages/Restaurants";

function App() {

  return (
    <>
      <Navbar />
      {/* TODO: เพิ่ม Route ไปหน้าต่างๆ */}
      <Home />
      
    </>
  )
}

export default App
