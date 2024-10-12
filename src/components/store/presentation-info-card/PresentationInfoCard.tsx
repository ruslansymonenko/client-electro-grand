import { FC } from 'react';
import { Info } from 'lucide-react';

interface IPresentationInfoCardProps {
  title: string;
}

const PresentationInfoCard: FC<IPresentationInfoCardProps> = ({ title }) => {
  return (
    <div className="bg-white p-6 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl overflow-hidden mx-auto cursor-pointer hover:shadow-xl">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 flex items-center justify-center">
          <Info />
        </div>

        <div className="mt-4 text-center">
          <p className="text-lg text-gray-800 font-bold">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default PresentationInfoCard;
