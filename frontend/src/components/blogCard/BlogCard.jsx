import annie from "../../images/annie.jpg";
import FunctionButtons from "./FunctionButtons";
import UserConciseInfos from "./UserConciseInfos";

import styles from "./BlogCard.module.scss";

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
