import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import clsx from "clsx";

const Header = ({ image, title, path, large }) => {
  return (
    <div className={clsx(styles.header, { [styles.large]: large })}>
      <Link to={path}>
        <img src={image} alt="image" />
      </Link>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
