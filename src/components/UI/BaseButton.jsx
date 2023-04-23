import classes from "./BaseButton.module.css";
const BaseButton = (props) => {
  return (
    <button
      className={`${classes["button"]} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default BaseButton;
