import { FC } from 'react';
import cn from 'clsx';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface IProps {
  className?: string;
}

export const Pagination: FC<IProps> = ({ className }) => {
  return (
    <ul className={cn('flex space-x-4 justify-center', className)}>
      <li className="flex items-center justify-center shrink-0 bg-gray-300 w-10 h-10 rounded-lg">
        <ArrowLeft />
      </li>
      <li className="flex items-center justify-center shrink-0 bg-secondaryDark  border-2 border-gray-200 cursor-pointer text-base font-bold text-white w-10 h-10 rounded-lg">
        1
      </li>
      <li className="flex items-center justify-center shrink-0 hover:bg-gray-50  border-2 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-lg">
        2
      </li>
      <li className="flex items-center justify-center shrink-0 hover:bg-gray-50  border-2 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-lg">
        3
      </li>
      <li className="flex items-center justify-center shrink-0 hover:bg-gray-50  border-2 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-lg">
        4
      </li>
      <li className="flex items-center justify-center shrink-0 hover:bg-gray-50 border-2 cursor-pointer w-10 h-10 rounded-lg">
        <ArrowRight />
      </li>
    </ul>
  );
};
