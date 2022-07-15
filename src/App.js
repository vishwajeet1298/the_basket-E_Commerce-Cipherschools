import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from './components/Navbar/Navbar';
import CategoriesData from './components/CategoriesData/CategoriesData';

function App() {
  // const [productid,setProductId]=useState(0)
  // const [categoryname,setCategoryName]=useState("")

  return (
   
    <div className="App">
      
     {/* <Navbar /> */}
     <CategoriesData />
     
    </div>
    
    
  
    
    
  );
}

export default App;
