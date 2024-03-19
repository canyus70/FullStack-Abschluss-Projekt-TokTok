import { useParams, useSearchParams } from "react-router-dom";

import FunctionButtons from "../components/blogCard/FunctionButtons";
import UserConciseInfos from "../components/blogCard/UserConciseInfos";
import Avatar from "../components/avatar/Avatar";
import Header from "../components/header/Header";
import Back from "../components/SVG/Back.svg";

import styles from "./Comments.module.scss";
import { useContext, useEffect, useRef, useState } from "react";
import AuthorizationContext from "../contexts/AuthorizationContext";
import UserContext from "../contexts/UserContext";

import Edit from "../components/SVG/Edit.svg";
import Delete from "../components/SVG/Delete.svg";
import fetchPost from "../services/fetchPost";

const Comments = () => {
  const [post, setPost] = useState(undefined);
  const [authorizedUser] = useContext(UserContext);
  const [accessToken] = useContext(AuthorizationContext);
  const { postId } = useParams();
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState(undefined);
  const ref = useRef();

  const [selectedComment, setSelectedComment] = useState(undefined);

  const postComment = async () => {
    try {
      const fetchUrl = selectedComment
        ? `/api/v1/posts/${post._id}/comment/${selectedComment}`
        : `/api/v1/posts/${post._id}/comment`;

      const response = await fetch(fetchUrl, {
        method: selectedComment ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ message }),
      });

      const { result } = await response.json();

      setMessage("");
      setPost(result);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const editComment = async (commentId) => {
    ref.current.focus();
    setSelectedComment(commentId);
  };

  const deleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `/api/v1/posts/${post._id}/comment/${commentId}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const { result } = await response.json();
      setPost(result);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    fetchPost(postId, accessToken, setPost);

    const fetchAllCommentsForPost = async () => {
      try {
        const response = await fetch(`/api/v1/posts/${postId}/comments`, {
          headers: { authorization: `Bearer ${accessToken}` },
        });

        const { result } = await response.json();

        setComments(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllCommentsForPost();
  }, [accessToken, setPost, setMessage]);

  if (!post) return null;
  console.log(post);

  return (
    <>
      <main className={styles.commentPage}>
        <Header image={Back} title="Comments" path="/" />
        <div className={styles.blogInfos}>
          <UserConciseInfos user={post.author} />
          <hr />
          <div className={styles.content}>
            <p className={styles.text}>
              {post.description}
              {post &&
                post.tags?.map((tag, index) => <span key={index}>{tag}</span>)}
            </p>
            <div className={styles.image}>
              <img src={post.images[0]} alt="postImage" />
            </div>
          </div>

          <p className={styles.timeStamp}> {post.updatedAt}</p>
          <FunctionButtons post={post} />
          <hr />
        </div>
        {comments &&
          comments.map((comment) => (
            <div className={styles.comments} key={comment._id}>
              <UserConciseInfos user={comment.author} />
              <p>{comment.message}</p>
              <p className={styles.timeStamp}>{comment.createdAt}</p>
              <div className={styles.buttons}>
                <img
                  src={Edit}
                  alt="edit"
                  onClick={() => editComment(comment._id)}
                />
                <img
                  src={Delete}
                  alt="delete"
                  onClick={() => deleteComment(comment._id)}
                />
              </div>
            </div>
          ))}
      </main>

      <div className={styles.inputField}>
        <Avatar small avatar={authorizedUser?.avatar} />
        <textarea
          type="text"
          placeholder="Your comment..."
          cols="30"
          rows="2"
          onChange={(event) => setMessage(event.target.value)}
          ref={ref}
        />
        <button className={styles.sendCommentButton} onClick={postComment}>
          Post
        </button>
      </div>
    </>
  );
};

export default Comments;
