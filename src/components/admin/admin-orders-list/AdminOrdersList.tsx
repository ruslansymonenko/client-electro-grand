import { FC } from 'react';

interface IProps {
  title: string;
  className?: string;
}

export const AdminOrdersList: FC<IProps> = ({ className, title }) => {
  return (
    <div className={className}>
      <h3 className="text-primary font-semibold text-xl">{title}</h3>
    </div>
  );
};
