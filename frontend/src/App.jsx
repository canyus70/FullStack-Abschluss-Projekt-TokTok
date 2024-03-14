import "./App.scss";
import Navbar from "./components/navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./components/search page/Search.jsx";
import UserPostUpload from "./pages/UserPostUpload.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Comments from "./pages/Comments.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import OtherUserProfile from "./pages/OtherUserProfile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/upload" element={<UserPostUpload />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/comment" element={<Comments />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route
          path="/:userId/other-user-profile"
          element={<OtherUserProfile />}
        />
      </Routes>
      {/* <Navbar /> */}
    </BrowserRouter>
  );
}

export default App;
