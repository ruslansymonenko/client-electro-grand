'use client';

import { FC } from 'react';

interface IControlBtnProps {
  text: string;
  action?: () => void;
}

const ControlBtn: FC<IControlBtnProps> = ({ text, action, ...props }) => {
  return (
    <button
      className="bg-gray-200 p-4 rounded-md shadow-md hover:text-primary"
      onClick={action}
      {...props}
    >
      {text}
    </button>
  );
};

export default ControlBtn;
