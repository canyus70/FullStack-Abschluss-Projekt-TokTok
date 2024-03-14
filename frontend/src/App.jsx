import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./components/search page/Search.jsx";
import UserPostUpload from "./pages/UserPostUpload.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import SignUp from "./components/Sign Up/Sign-Up.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import SixDigit from "./components/SixDigit/SixDigit.jsx";
import Comments from "./pages/Comments.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import OtherUserProfile from "./pages/OtherUserProfile.jsx";


function App() {
  return(  
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/sixdigit" element={<SixDigit/>}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/upload" element={<UserPostUpload/>}/>
    <Route path="/profile" element={<UserProfile />} />
    <Route path="/comment" element={<Comments />} />
    <Route path="/edit-profile" element={<EditProfile />} />
     <Route
      path="/:userId/other-user-profile"
      element={<OtherUserProfile />}
   </Routes>
  </BrowserRouter>
  );
}

export default App;
