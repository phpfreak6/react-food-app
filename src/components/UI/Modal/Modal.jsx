import { Fragment } from "react";
import { createPortal } from "react-dom";
import style from "./Modal.module.css";

function Backdrop(properties) {
  return <div onClick={properties.onClose} className={style.backdrop}></div>;
}

function ModalOverlay(properties) {
  return (
    <div className={style.modal}>
      <div className={style.content}>{properties.children}</div>
    </div>
  );
}

const portal_element = document.getElementById("overlays");

function Modal(properties) {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={properties.onClose} />, portal_element)}
      {createPortal(
        <ModalOverlay>{properties.children}</ModalOverlay>,
        portal_element
      )}
    </Fragment>
  );
}

export default Modal;
