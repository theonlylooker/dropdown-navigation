import React from "react";
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/icon-menu.svg";
import Modal from "../Modal/Modal";
import NavBarList from "../NavBarList/NavBarList";
import { useModal } from "../../hooks/useModal";

const NavBar = () => {
  const [modalState, handleOpen, handleClose] = useModal();
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="logo" />
      <div className="navbar__desktop">
        <NavBarList />
      </div>
      <button className="navbar__menu" onClick={handleOpen}>
        <img src={menu} alt="" />
      </button>
      <Modal modalState={modalState} handleClose={handleClose}>
        <NavBarList />
      </Modal>
    </div>
  );
};

export default NavBar;
