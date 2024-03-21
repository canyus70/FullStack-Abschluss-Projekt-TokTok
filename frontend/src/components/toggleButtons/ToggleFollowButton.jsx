import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import AuthorizationContext from "../../contexts/AuthorizationContext";
import FollowUser from "../../components/SVG/FollowUser.svg";

import { backendUrl } from "../../api";

const ToggleFollowButton = ({ user, onClick = () => {}, icon }) => {
  const [authorizedUser] = useContext(UserContext);
  const [accessToken] = useContext(AuthorizationContext);

  const isFollowed = authorizedUser?.following?.some(
    (following) => following._id === user._id
  );

  // toggle follow or notFollow
  const toggleFollow = async () => {
    if (!authorizedUser || !user) return;
    if (!accessToken) window.alert("Please sign in");

    const next = !isFollowed;
    const addFollowEndPoint = `${backendUrl}/api/v1/users/${user._id}/add-follow`;
    const removeFollowEndPoint = `${backendUrl}/api/v1/users/${user._id}/not-follow`;

    try {
      const response = await fetch(
        next ? addFollowEndPoint : removeFollowEndPoint,
        { method: "POST", headers: { authorization: `Bearer ${accessToken}` } }
      );
      await response.json();

      onClick(next);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isFollowed ? (
        <button
          className={icon ? "outlineButton" : "outlineButtonInSearch"}
          onClick={toggleFollow}
        >
          Following
        </button>
      ) : (
        <button
          className={icon ? "primaryButton" : "primaryButtonInSearch"}
          onClick={toggleFollow}
        >
          {icon && <img src={FollowUser} alt="followUser" />} Follow
        </button>
      )}
    </>
  );
};

export default ToggleFollowButton;
