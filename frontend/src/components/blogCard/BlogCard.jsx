import annie from "../../images/annie.jpg";
import FunctionButtons from "./FunctionButtons";
import UserConciseInfos from "./UserConciseInfos";

import styles from "./BlogCard.module.scss";

const BlogCard = ({
  avatar,
  name,
  profession,
  imageUrl,
  liked,
  comments,
  saved,
}) => {
  return (
    <section className={styles.blogCard}>
      <UserConciseInfos avatar={avatar} name={name} profession={profession} />
      <div className={styles.image}>
        <img src={imageUrl} alt="annie" />
      </div>
      <FunctionButtons liked={liked} comments={comments} saved={saved} />
    </section>
  );
};

export default BlogCard;
