import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "./components/Splash/Splash";
import PostresList from './components/PostresList/PostresList'

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
      <Route path="/" element={loading ? <Splash/> : <PostresList/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
