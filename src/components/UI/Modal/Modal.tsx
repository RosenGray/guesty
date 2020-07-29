import React from "react";
import classes from "./Modal.module.scss";

interface Props {
  children: any;
}

const Modal = ({ children }: Props) => {
  return (
    <div className={classes.Modal}>
      <div className={classes.Modal__content}>{children}</div>
    </div>
  );
};

export default Modal;
