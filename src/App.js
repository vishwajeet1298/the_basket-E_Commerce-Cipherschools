import React, {useState} from "react";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./components/Login/Login";
import Navbar from './components/Navbar/Navbar';
import CategoriesData from './components/CategoriesData/CategoriesData';
import ProductCategoryCard from './components/ProductCategoryCard/ProductCategoryCard';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn]=useState(false);

  // const [productid,setProductId]=useState(0)
  // const [categoryname,setCategoryName]=useState("")

  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
        <Route path="/" element={<ProductCategoryCard/>} />
        <Route path="/sign-in" element={<Login />}  />
      </Routes>
      
     {/* <Navbar /> */}
     {/* <CategoriesData /> */}
     
    </div>
    </BrowserRouter>
    
  
    
    
  );
}

export default App;
