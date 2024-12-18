import { FC } from 'react';
import cn from 'clsx';

interface IProps {
  text?: string;
  className?: string;
}

export const ElementNotFound: FC<IProps> = ({ className, text }) => {
  return (
    <div className={cn('font-semibold', className)}>{text ? text : 'Елемент не знайдено'}</div>
  );
};
