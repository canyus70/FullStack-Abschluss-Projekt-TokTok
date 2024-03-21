import { useContext, useEffect } from "react";
import styles from "./Saved.module.scss";
import UserContext from "../../contexts/UserContext.jsx";
import AuthorizationContext from "../../contexts/AuthorizationContext.jsx";
import RedSaved from "../SVG/RedSaved.svg";
import Back from "../SVG/Back.svg";

import { Link, useParams } from "react-router-dom";
import fetchUser from "../../services/fetchUser.js";
import Header from "../header/Header.jsx";

const Saved = () => {
  const [accessToken] = useContext(AuthorizationContext);
  const [user, setUser] = useContext(UserContext);
  const { userId } = useParams();

  useEffect(() => {
    fetchUser(userId, setUser, accessToken);
  }, [accessToken, userId]);
  console.log(user);

  if (!user?.saved) return;

  return (
    <main className={styles.userSavedPage}>
      <Header image={Back} title="Profile" path={`/profile`} />
      <div className={styles.feeds}>
        <div className={styles.title}>
          <img src={RedSaved} alt="feeds" />
          <h3>Saved</h3>
        </div>
        <div className={styles.blogs}>
          {user.saved &&
            user.saved.map((save, index) => (
              <div key={index} className={styles.image}>
                <Link to={`/${save._id}/comment`}>
                  <img src={save.images[0]} alt="postImage" />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Saved;
