import headerStyles from "../styles/Header.module.css";
import React from "react";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date the latest news
      </p>
    </div>
  );
};

export default Header;
