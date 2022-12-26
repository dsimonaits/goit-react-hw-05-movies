import { BtnStyled } from './Btn.styled';

function Btn({ text, onclickHandler, display }) {
  return (
    <BtnStyled type="button" onClick={onclickHandler}>
      {text}
    </BtnStyled>
  );
}

export default Btn;
