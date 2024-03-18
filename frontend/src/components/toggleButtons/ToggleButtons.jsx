import { useContext, useEffect, useState } from "react";

import HeartRed from "../SVG/HeartRed.svg";
import Heart from "../SVG/Heart.svg";
import RedSaved from "../SVG/RedSaved.svg";
import Saved from "../SVG/Saved.svg";
import UserContext from "../../contexts/UserContext";
import AuthorizationContext from "../../contexts/AuthorizationContext";

export const ToggleLike = ({ postId, onClick = () => {} }) => {
  const [liked, setLiked] = useState(false);
  const [user] = useContext(UserContext);
  const [accessToken] = useContext(AuthorizationContext);

  useEffect(() => {
    if (!postId) return;
    const isLiked = user?.likes?.find((like) => like._id === postId);
    setLiked(!!isLiked);
  }, [user, postId]);

  // toggle like or unlike
  const toggleLike = async () => {
    if (!user || !postId) return;
    if (!accessToken) window.alert("Please sign in");

    const next = !liked;
    const addLikedEndPoint = `api/v1/posts/${postId}/like`;
    const removeLikedEndPoint = `api/v1/posts/${postId}/unlike`;

    try {
      console.log(next);
      if (next === true) {
        const response = await fetch(addLikedEndPoint, {
          method: "POST",
          headers: { authorization: `Bearer ${accessToken}` },
        });
        await response.json();
      } else if (next === false) {
        const response = await fetch(removeLikedEndPoint, {
          method: "DELETE",
          headers: { authorization: `Bearer ${accessToken}` },
        });
        await response.json();
      }

      setLiked(next);
      onClick(next);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={toggleLike}>
      {liked ? (
        <img src={HeartRed} alt="HeartRed" />
      ) : (
        <img src={Heart} alt="heart" />
      )}
    </button>
  );
};

export const ToggleSaved = () => {
  const [saved, setSaved] = useState(false);

  return (
    <button>
      {saved ? (
        <img src={RedSaved} alt="redSaved" />
      ) : (
        <img src={Saved} alt="saved" />
      )}
    </button>
  );
};
