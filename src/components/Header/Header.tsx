import React from "react";
import classes from "./Header.module.scss";
import Smiley from "./../Smiley/Smiley";

const Header: React.FC = (): React.ReactElement => {
  return (
    <header className={classes.Header}>
      Guesty
      <Smiley />
    </header>
  );
};

export default Header;
