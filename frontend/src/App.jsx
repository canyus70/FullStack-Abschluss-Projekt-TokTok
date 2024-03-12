import "./App.css";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return <>
  <BrowserRouter>
  <Routes><Route/></Routes>
  <Navbar/>
  </BrowserRouter>
    
  </>;
}

export default App;
