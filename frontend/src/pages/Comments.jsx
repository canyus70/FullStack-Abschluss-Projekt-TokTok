import { useParams, useSearchParams } from "react-router-dom";

import FunctionButtons from "../components/blogCard/FunctionButtons";
import UserConciseInfos from "../components/blogCard/UserConciseInfos";
import Avatar from "../components/avatar/Avatar";
import Header from "../components/header/Header";
import Back from "../components/SVG/Back.svg";

import styles from "./Comments.module.scss";
import { useEffect, useState } from "react";

const Comments = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/v1/post/${postId}`); //缺少endpoint
      const { result } = await response.json();

      setPost(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (!post) return null;

  return (
    <>
      <main className={styles.commentPage}>
        <Header image={Back} title="Comments" path="/" />
        <div className={styles.blogInfos}>
          <UserConciseInfos />
          <hr />
          <p className={styles.content}>{post.description}</p>
          <p className={styles.tags}>
            {post && post.tags?.map((tag) => <span>{tag}</span>)}
          </p>
          <p className={styles.timeStamp}> {post.updatedAt}</p>
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
