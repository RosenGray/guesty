import React, { ReactNode } from "react";
import classes from "./Button.module.scss";

interface Props {
  onClickHandler: () => void;
  children: string;
}

const Button = ({ onClickHandler, children }: Props) => {
  return (
    <button className={classes.Button} onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;
