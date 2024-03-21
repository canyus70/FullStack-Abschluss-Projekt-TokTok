import { useContext } from "react";

import HeartRed from "../SVG/HeartRed.svg";
import Heart from "../SVG/Heart.svg";
import RedSaved from "../SVG/RedSaved.svg";
import Saved from "../SVG/Saved.svg";
import UserContext from "../../contexts/UserContext";
import AuthorizationContext from "../../contexts/AuthorizationContext";
import { backendUrl } from "../../api";
import fetchUser from "../../services/fetchUser";

export const ToggleLike = ({ post }) => {
  const [user, setUser] = useContext(UserContext);
  const [accessToken] = useContext(AuthorizationContext);

  const isLiked = user?.likes?.find((like) => like._id === post._id);

  const liked =
    post.likedBy.filter((userId) => userId !== user?._id).length + isLiked
      ? 1
      : 0;
  // toggle like or unlike
  const toggleLike = async () => {
    if (!user || !post._id) return;
    if (!accessToken) window.alert("Please sign in");

    const next = !liked;
    const addLikedEndPoint = `${backendUrl}/api/v1/posts/${post._id}/like`;
    const removeLikedEndPoint = `${backendUrl}/api/v1/posts/${post._id}/unlike`;

    try {
      if (!isLiked) {
        const response = await fetch(addLikedEndPoint, {
          method: "POST",
          headers: { authorization: `Bearer ${accessToken}` },
        });
        await response.json();
      } else {
        const response = await fetch(removeLikedEndPoint, {
          method: "DELETE",
          headers: { authorization: `Bearer ${accessToken}` },
        });
        await response.json();
      }

      fetchUser(user._id, setUser, accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={toggleLike}>
        {isLiked ? (
          <img src={HeartRed} alt="HeartRed" />
        ) : (
          <img src={Heart} alt="heart" />
        )}
      </button>
      <p>{liked}</p>
    </div>
  );
};

export const ToggleSaved = ({ post }) => {
  const [user, setUser] = useContext(UserContext);
  const [accessToken] = useContext(AuthorizationContext);

  const isSaved = user?.saved?.find((save) => save._id === post._id);
  const saved =
    post.savedBy.filter((userId) => userId !== user?._id).length + isSaved
      ? 1
      : 0;

  // toggle save or unsaved
  const toggleSaved = async () => {
    if (!user || !post._id) return;
    if (!accessToken) window.alert("Please sign in");

    const next = !saved;
    const addSavedEndPoint = `${backendUrl}/api/v1/posts/${post._id}/saved`;
    const removeSavedEndPoint = `${backendUrl}/api/v1/posts/${post._id}/remove-saved`;

    try {
      if (!isSaved) {
        const response = await fetch(addSavedEndPoint, {
          method: "POST",
          headers: { authorization: `Bearer ${accessToken}` },
        });
        await response.json();
      } else if (next === false) {
        const response = await fetch(removeSavedEndPoint, {
          method: "DELETE",
          headers: { authorization: `Bearer ${accessToken}` },
        });
        await response.json();
      }
      fetchUser(user._id, setUser, accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={toggleSaved}>
        {isSaved ? (
          <img src={RedSaved} alt="redSaved" />
        ) : (
          <img src={Saved} alt="saved" />
        )}
      </button>
      <p>{saved}</p>
    </div>
  );
};
