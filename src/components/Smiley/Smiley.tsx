import React from "react";
import classes from "./Smiley.module.scss";

const Smiley: React.FC = (): React.ReactElement => {
  return (
    <div className={classes.Smiley}>
      <div className={classes.Smiley__nose}></div>
    </div>
  );
};

export default Smiley;
