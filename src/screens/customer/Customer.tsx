import { FC } from 'react';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';

const Terms: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <Breadcrumb />
      <div className="my-14">
        <div>
          <h2 className="font-bold text-3xl mb-4">Сторінка клієнта</h2>
          <section className="w-3/4 mb-4"></section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
