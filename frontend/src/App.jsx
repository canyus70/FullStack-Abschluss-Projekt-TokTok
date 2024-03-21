import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./components/search page/Search.jsx";
import UserPostUpload from "./pages/UserPostUpload.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import SixDigit from "./components/SixDigit/SixDigit.jsx";
import Comments from "./pages/Comments.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import OtherUserProfile from "./pages/OtherUserProfile.jsx";
import AuthorizationContextProvider from "./components/providers/AuthorizationContextProvider.jsx";
import UserContextProvider from "./components/providers/UserContextProvider.jsx";
import ForgotPassword from "./components/forgotpassword/ForgotPassword.jsx";

import EditPost from "./pages/EditPost.jsx";

import Splash from "./pages/splashscreen/SplashScreen.jsx";
import { useState, useEffect } from "react";
import Favo from "./components/Favo/Favo.jsx";
import Saved from "./components/Saved/Saved.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      <AuthorizationContextProvider>
        <UserContextProvider>
          <Routes>
            <Route path="/splash" element={<Splash />} />
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={loading ? <Splash /> : <SignUp />} />
            <Route path="/sixdigit/:userId" element={<SixDigit />} />
            <Route path="/search" element={<Search />} />

            <Route path="/upload" element={<UserPostUpload />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/:postId/comment" element={<Comments />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/saved/:userId" element={<Saved />} />
            <Route path="/favoriten" element={<Favo />} />
            <Route
              path="/:userId/other-user-profile"
              element={<OtherUserProfile />}
            />
            <Route path="/resend-password" element={<ForgotPassword />} />
            <Route path="/edit-post/:postId" element={<EditPost />} />
          </Routes>
        </UserContextProvider>
      </AuthorizationContextProvider>
    </BrowserRouter>
  );
}

export default App;
