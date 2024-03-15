import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import IconMimik from "../SVG/IconMimik.svg";
import "./Search.scss";
import Navbar from "../navbar/Navbar";

const Seach = () => {
  return (
    <>
      <section className="container">
        <form className="search-user">
          <Input
            className="input-search"
            placeholder="Search"
            prefix={<UserOutlined />}
          />
        </form>
        <div class="image-container">
          <img src={IconMimik} alt="" />
        </div>
        <div className="border"></div>
      </section>
      <Navbar />
    </>
  );
};

export default Seach;
