import BlogCard from "../components/blogCard/BlogCard";
import Logo from "../components/SVG/Logo.svg";

import styles from "./Home.module.scss";
import Header from "../components/header/Header.jsx";
import { useEffect, useState } from "react";
import { backendUrl } from "../api/index.js";
import NewBar from "../components/newBar/NewBar.jsx";
const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/v1/posts/`);
      const { result } = await response.json();

      const sortedPosts = result.sort(
        (a, b) => new Date(b.creadetAt) - new Date(a.creadetAt)
      );

      setPosts(sortedPosts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <main className={styles.homePage}>
        <Header image={Logo} title="TokTok" large />
        {posts &&
          posts.map((post) => (
            <BlogCard
              key={post._id}
              liked={post.likedBy.length}
              comments={post.comments.length}
              name={`${post?.author?.firstname} ${post.author?.lastname}`}
              id={post.author?._id}
              post={post}
              postId={post._id}
              userId={post.author?._id}
            />
          ))}
      </main>
      <NewBar />
    </>
  );
};

export default Home;
