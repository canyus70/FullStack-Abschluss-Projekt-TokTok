import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./components/search page/Search.jsx";
import UserPostUpload from "./pages/UserPostUpload.jsx";
import UserProfile from "./pages/UserProfile.jsx";


function App() {
  return <>
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/upload" element={<UserPostUpload/>}/>
    <Route path="/profile" element={<UserProfile/>}/>
    </Routes>
  <Navbar/>
  </BrowserRouter>
    
  </>;
}

export default App;
