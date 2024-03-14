import FunctionButtons from "../components/blogCard/FunctionButtons";
import UserConciseInfos from "../components/blogCard/UserConciseInfos";
import Avatar from "../components/avatar/Avatar";
import Header from "../components/header/Header";
import Back from "../components/SVG/Back.svg";

import styles from "./Comments.module.scss";

const Comments = () => {
  return (
    <>
      <main className={styles.commentPage}>
        <Header image={Back} title="Comments" path="/" />
        <div className={styles.blogInfos}>
          <UserConciseInfos />
          <hr />
          <p className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className={styles.tags}>
            #girl #girls #babygirl #girlpower #girlswholift #polishgirl
            #girlboss #girly #girlfriend #fitgirl #birthdaygirl #instagirl
            #girlsnight #animegirl #mygirl
          </p>
          <p className={styles.timeStamp}> 6 hours ago</p>
          <FunctionButtons />
          <hr />
        </div>

        <div className={styles.comments}>
          <UserConciseInfos />
          <p>hallo hallo hallo</p>
          <p className={styles.timeStamp}> 6 hours ago</p>
          <FunctionButtons transparent />
        </div>
      </main>

      <div className={styles.inputField}>
        <Avatar small />
        <textarea
          type="text"
          placeholder="Your comment..."
          cols="30"
          rows="1"
        />
        <button className={styles.sendCommentButton}>Post</button>
      </div>
    </>
  );
};

export default Comments;
