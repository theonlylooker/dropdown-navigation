import React, { useState } from "react";

export const useModal = (): [boolean, () => void, () => void] => {
  const [modal, setModal] = useState<boolean>(false);
  const handleOpen = () => {
    console.log("asd");
    setModal(true);
  };
  const handleClose = () => setModal(false);

  return [modal, handleOpen, handleClose];
};
