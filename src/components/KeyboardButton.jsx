export const KeyboardButton = (props) => {
  return (
    <button value={props.keyboardButtonValue} onClick={props.handleClick}>
      {props.keyboardButtonValue}
    </button>
  );
};
