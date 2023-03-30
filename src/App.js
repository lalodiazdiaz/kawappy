import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "./components/Splash/Splash";
import PostresList from './components/PostresList/PostresList'
import Home from "./components/Home/Home";
import ComidaList from "./components/ComidaList/ComidaList";
import Bebidaslist from "./components/BebidasList/Bebidaslist";

function App() {
const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false)
  }, 5000);
}, []);

  return (
   <BrowserRouter>
    <Routes>
    
      <Route path="/" element={loading ? <Splash/> : <Home/>} >
      <Route path="/" element={<PostresList/>} />
      <Route path="/Comidas" element={<ComidaList />}/>
      <Route path="/Bebidas" element={<Bebidaslist />}/>
      </Route>
   
    </Routes>
   </BrowserRouter>
  );
}

export default App;
