import React from "react";
import classes from "./ModalContent.module.scss";
import Button from "./../UI/Button/Button";

interface Props {
  name: string;
  email: string;
  invitationStatus: boolean;
  onClickHandler: () => void;
}

const ModalContent = ({
  name,
  email,
  invitationStatus,
  onClickHandler,
}: Props) => {
  return (
    <div className={classes.ModalContent}>
      <p>{name}</p>
      <p>{email}</p>
      <Button onClickHandler={onClickHandler}>
        {!invitationStatus ? "Approve" : "Decline"}
      </Button>
    </div>
  );
};

export default ModalContent;
