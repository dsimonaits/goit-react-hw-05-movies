import styled from 'styled-components';
import { FaAngleUp } from 'react-icons/fa';

export const ToTopBtn = styled.div`
  position: relative;
`;

export const ToTopIcon = styled(FaAngleUp)`
  position: fixed;
  bottom: 40px;
  right: 25px;
  z-index: 20;

  background-color: #c61212;
  border: 2px solid #fff;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  color: #fff;
  cursor: pointer;
  animation: movebtn 3s ease-in-out infinite;
  transition: all 1s ease-in-out;

  .icon-style:hover {
    animation: none;
    background: #fff;
    color: #551b54;
    border: 2px solid #551b54;
  }
  @keyframes movebtn {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
