import React from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import closemenu from "../../assets/images/icon-close-menu.svg";
import { modalProps } from "../../types/types";
const Modal = ({ children, modalState, handleClose }: modalProps) => {
  return (
    <div className={`modal ${modalState === true ? "open" : "close"}`}>
      <div className="modal__container">
        <Wrapper>
          <button className="modal__closemenu" onClick={handleClose}>
            <img className="modal__closeimg" src={closemenu} alt="" />
          </button>

          {children}
        </Wrapper>
      </div>
    </div>
  );
};

export default Modal;
