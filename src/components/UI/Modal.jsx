import ReactDOM from "react-dom";

import Card from "./Card";
import BaseButton from "./BaseButton";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
      <footer className={classes.actions}>
        <BaseButton className={classes.close} onClick={props.onClick}>
          Close
        </BaseButton>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  if (!props.open) return null;
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClose} title={props.header}>
          {props.children}
        </ModalOverlay>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
