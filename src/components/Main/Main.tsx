import React, { ReactNode } from "react";
import classes from "./Main.module.scss";

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props): React.ReactElement => {
  return <main className={classes.Main}>{children}</main>;
};

export default Main;
