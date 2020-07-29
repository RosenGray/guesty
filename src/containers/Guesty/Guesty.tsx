import React, { useContext } from "react";
import { GuestsContext } from "./../../context/GuestsContext";
import classes from "./Guesty.module.scss";
import Spinner from "./../../components/UI/Spinner/Spinner";
import Guests from "./../../components/Guests/Guests";

const Guesty: React.FC = (): React.ReactElement => {
  // @ts-ignore
  const { state, dispatch } = useContext(GuestsContext);

  return (
    <div className={classes.MaGuestyin}>
      <h1 style={{ textAlign: "center" }}>The Best Event Name in The World</h1>
      {state.loading ? (
        <Spinner />
      ) : (
        <Guests dispatcher={dispatch} guests={state.guests} />
      )}
    </div>
  );
};

export default Guesty;
