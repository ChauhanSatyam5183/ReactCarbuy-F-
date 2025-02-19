import { Route,Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Siginup from "./Components/Signup/Siginup"
import AboutPage from "./Components/About/AboutPage";
import Product from "./Components/Products/Product";
import BuyCar from "./Components/Car/BuyCar";
import SellCar from "./Components/Car/SellCar";


function App() {
  
  return (
       
    <> 
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Aboutpage" element={<AboutPage/>}/>
        <Route path="/signup" element={<Siginup/>}/>
        <Route path="/Product" element={<Product/>}/>
         <Route path="/BuyCar" element={<BuyCar/>}/>
         <Route path="/SellCar" element={<SellCar/>}/>
       </Routes>
    </>
     

    
    
      
  );
}

export default App
