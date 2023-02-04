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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/cafes" element={<Cafes />}/>
        <Route path="/cafe/:id" element={<Cafe />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/add" element={<AddPlace />} />
      </Routes>
    </>
  )
}

export default App
