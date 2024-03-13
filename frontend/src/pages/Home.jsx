import BlogCard from "../components/blogCard/BlogCard";

import styles from "./Home.module.scss";
const Home = () => {

  return (
    <main className={styles.homePage}>
      <BlogCard />
    </main>
  );

};

export default Home;
