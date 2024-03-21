import { useContext, useEffect } from "react";
import styles from "./Favo.module.scss";
import UserContext from "../../contexts/UserContext.jsx";
import AuthorizationContext from "../../contexts/AuthorizationContext.jsx";
import HeartRed from "../SVG/HeartRed.svg";
import Back from "../SVG/Back.svg";
import { Link, useParams } from "react-router-dom";
import fetchUser from "../../services/fetchUser.js";
import Header from "../header/Header.jsx";

const Favo = () => {
  const [accessToken] = useContext(AuthorizationContext);
  const [user, setUser] = useContext(UserContext);
  const { userId } = useParams();

  useEffect(() => {
    fetchUser(userId, setUser, accessToken);
  }, [accessToken, userId]);
  console.log(user);

  if (!user?.likes) return;

  return (
    <main className={styles.userFavoritePage}>
      <Header image={Back} title="Profile" path={`/profile`} />
      <div className={styles.feeds}>
        <div className={styles.title}>
          <img src={HeartRed} alt="feeds" />
          <h3>Favorites</h3>
        </div>
        <div className={styles.blogs}>
          {user.likes &&
            user.likes.map((like, index) => (
              <div key={index} className={styles.image}>
                <Link to={`/${like._id}/comment`}>
                  <img src={like.images[0]} alt="postImage" />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Favo;
