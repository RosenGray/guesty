import React from "react";
import classes from "./Guests.module.scss";
import Guest from "./Guest/Guest";

interface Props {
  guests: Array<Object>;
  dispatcher: any;
}

const Guests = ({ guests, dispatcher }: Props): React.ReactElement => {
  const updateGuestInviteStatus = (index: number) => {
    dispatcher({
      type: "UPDATE_GUEST_INVITATION_STATUS",
      index,
    });
  };

  const guestsList = guests.map((guest: any, key: number) => (
    <Guest
      updateGuestInviteStatus={() => updateGuestInviteStatus(key)}
      key={guest.id}
      {...guest}
    />
  ));
  return (
    <div className={classes.Guests}>
      <ul className={classes.Guests__list}>{guestsList}</ul>
    </div>
  );
};

export default Guests;
