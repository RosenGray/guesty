import React, { useState, useContext } from "react";
import classes from "./Guest.module.scss";

import Button from "./../../UI/Button/Button";
import Modal from "./../../UI/Modal/Modal";
import ModalContent from "./../../ModalContent/ModalContent";

const Guest = (props: any): React.ReactElement => {
  const [showModal, setShowModal] = useState(false);

  const { name, email, invitationStatus, updateGuestInviteStatus } = props;
  const inviteStatus = invitationStatus ? "Approved" : "Declined";
  const setStatus = () => {
    updateGuestInviteStatus();
    setShowModal((p) => !p);
  };

  const modal = showModal ? (
    <Modal>
      <ModalContent
        invitationStatus={invitationStatus}
        onClickHandler={setStatus}
        name={name}
        email={email}
      />
    </Modal>
  ) : null;
  return (
    <>
      {modal}
      <li className={classes.Guest}>
        <p className={classes.Guest__name}>{name}</p>
        <p className={`${classes.Guest__status} ${classes[inviteStatus]}`}>
          Invitation status: {inviteStatus}
        </p>
        <Button onClickHandler={() => setShowModal((p) => !p)}>Manage</Button>
      </li>
    </>
  );
};

export default Guest;
