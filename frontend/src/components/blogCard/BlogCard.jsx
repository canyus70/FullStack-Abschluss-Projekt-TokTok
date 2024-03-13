import annie from "../../images/annie.jpg";

import styles from "./BlogCard.module.scss";
import FunctionButtons from "./FunctionButtons";
import UserConciseInfos from "./UserConciseInfos";

const BlogCard = () => {
  return (
    <section className={styles.blogCard}>
      <UserConciseInfos />
      <div className={styles.image}>
        <img src={annie} alt="annie" />
      </div>
      <FunctionButtons />
    </section>
  );
};

export default BlogCard;
