import { FC } from 'react';

interface IControlBtnProps {
  text: string;
}

const ControlBtn: FC<IControlBtnProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default ControlBtn;
