function Btn({ text, onclickHandler }) {
  return (
    <button type="button" onClick={onclickHandler}>
      {text}
    </button>
  );
}

export default Btn;
