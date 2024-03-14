import BlogCard from "../components/blogCard/BlogCard";
import Logo from "../components/SVG/Logo.svg";
import Navbar from "../components/navbar/Navbar.jsx";

import styles from "./Home.module.scss";
import Header from "../components/header/Header.jsx";
const Home = () => {
  return (
    <>
      <main className={styles.homePage}>
        <Header image={Logo} title="TokTok" />
        <BlogCard />
      </main>
      <Navbar />
    </>
  );
};

export default Home;
