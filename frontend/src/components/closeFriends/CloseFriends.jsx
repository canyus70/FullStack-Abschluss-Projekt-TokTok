import { useContext, useEffect, useState } from "react";
import AuthorizationContext from "../../contexts/AuthorizationContext";
import UserContext from "../../contexts/UserContext";

import { Link, useParams } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import fetchUser from "../../services/fetchUser";
import Header from "../header/Header";
import Back from "../SVG/Back.svg";
import Feeds from "../SVG/Feeds.svg";
import styles from "./CloseFriends.module.scss";

const CloseFriends = () => {
  const [accessToken] = useContext(AuthorizationContext);
  const [user, setUser] = useContext(UserContext);
  const { userId } = useParams();
  console.log(userId);

  useEffect(() => {
    fetchUser(userId, setUser, accessToken);
  }, [accessToken, userId]);
  console.log(user);

  if (!user?.likes) return;
  const closeFriends = user.followers.filter((follower) =>
    user.following.some((follow) => follow._id === follower._id)
  );
  console.log(closeFriends[0]);

  return (
    <main className={styles.closeFriends}>
      <Header image={Back} title="Profile" path="/profile" />
      <div className={styles.title}>
        <img src={Feeds} alt="feeds" />
        <h3>Friends</h3>
      </div>
      <div className={styles.friendsList}>
        {closeFriends &&
          closeFriends.map((friend) => (
            <div key={friend._id} className={styles.userCard}>
              <Avatar avatar={friend.avatar} />
              <h3>
                {friend.firstname} {friend.lastname}
              </h3>
              <h4>{friend.bio}</h4>
              <h4>{friend.profession}</h4>
              <a target="_blank" href={friend.website}>
                {friend.website}
              </a>
            </div>
          ))}
      </div>
    </main>
  );
};

export default CloseFriends;
