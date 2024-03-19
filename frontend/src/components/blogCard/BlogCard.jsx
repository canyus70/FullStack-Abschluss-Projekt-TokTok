import annie from "../../images/annie.jpg";
import FunctionButtons from "./FunctionButtons";
import UserConciseInfos from "./UserConciseInfos";

import styles from "./BlogCard.module.scss";
import right from "../SVG/right.svg";
import left from "../SVG/left.svg";
import { useState } from "react";

const BlogCard = ({ post }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const lastImage = () => {
    if (!post || !post.images || post.images.length <= 1) return;

    setImageIndex((imageIndex - 1) % post.images.length);
  };

  const nextImage = () => {
    if (!post || !post.images || post.images.length <= 1) return;

    setImageIndex((imageIndex + 1) % post.images.length);
  };

  return (
    <section className={styles.blogCard}>
      <UserConciseInfos user={post.author} />

      <div className={styles.image}>
        <button onClick={lastImage} className="iconButton">
          <img src={left} alt="left" />
        </button>
        <img src={post.images.at(imageIndex)} alt="image" />
        <button onClick={nextImage} className="iconButton">
          <img src={right} alt="right" />
        </button>
      </div>

      <FunctionButtons post={post} />
    </section>
  );
};

export default BlogCard;
