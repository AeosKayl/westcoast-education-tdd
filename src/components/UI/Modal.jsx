import Card from "./Card";
import BaseButton from "./BaseButton";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>{props.children}</div>
      <footer className={classes.actions}>
        <BaseButton onClick={props.onClick}>Close</BaseButton>
      </footer>
    </Card>
  );
};

export default Modal;
