import { useContext, useEffect, useState } from "react";

import HeartRed from "../SVG/HeartRed.svg";
import Heart from "../SVG/Heart.svg";
import RedSaved from "../SVG/RedSaved.svg";
import Saved from "../SVG/Saved.svg";
import UserContext from "../../contexts/UserContext";
import AuthorizationContext from "../../contexts/AuthorizationContext";

export const ToggleLike = ({ post, onClick = () => {} }) => {
  const [user] = useContext(UserContext);
  const [accessToken] = useContext(AuthorizationContext);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (!post._id) return;
    const isLiked = user?.likes?.find((like) => like === post._id);

    setLiked(!!isLiked);
  }, [user, post._id]);

  // toggle like or unlike
  const toggleLike = async () => {
    if (!user || !post._id) return;
    if (!accessToken) window.alert("Please sign in");

    const next = !liked;
    const addLikedEndPoint = `/api/v1/posts/${post._id}/like`;
    const removeLikedEndPoint = `/api/v1/posts/${post._id}/unlike`;

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

export const ToggleSaved = ({ postId, onClick = () => {} }) => {
  const [saved, setSaved] = useState(false);
  const [user] = useContext(UserContext);
  const [accessToken] = useContext(AuthorizationContext);

  useEffect(() => {
    if (!postId) return;

    const isSaved = user?.saved?.find((save) => save === postId);

    setSaved(!!isSaved);
  }, [user, postId]);

  // toggle save or unsaved
  const toggleSaved = async () => {
    if (!user || !postId) return;
    if (!accessToken) window.alert("Please sign in");

    const next = !saved;
    const addSavedEndPoint = `/api/v1/posts/${postId}/saved`;
    const removeSavedEndPoint = `/api/v1/posts/${postId}/remove-saved`;

    try {
      console.log(next);
      if (next === true) {
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
      setSaved(next);
      onClick(next);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={toggleSaved}>
      {saved ? (
        <img src={RedSaved} alt="redSaved" />
      ) : (
        <img src={Saved} alt="saved" />
      )}
    </button>
  );
};
