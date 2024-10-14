import { FC } from 'react';

const Breadcrumb: FC = () => {
  return (
    <ul className="flex items-center justify-center space-x-4 font-[sans-serif]">
      <li className="text-gray-500 text-base cursor-pointer">Home</li>
      <li className="text-gray-500 text-lg">/</li>
      <li className="text-gray-500 text-base cursor-pointer">Profile</li>
      <li className="text-gray-500 text-lg">/</li>
      <li className="text-[#333] text-base font-bold cursor-pointer">Edit</li>
    </ul>
  );
};

export default Breadcrumb;
