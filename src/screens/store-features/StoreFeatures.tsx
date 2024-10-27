import { FC } from 'react';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import Accordion from '@/components/common/accordion/Accordion';
import { featuresData } from '@/screens/store-features/features.data';

const StoreFeatures: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <Breadcrumb />
      <div className="my-14">
        <div>
          <section className="mb-4 w-full">
            <h3 className="font-bold my-6 text-3xl">Наші переваги</h3>
            <Accordion items={featuresData} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default StoreFeatures;
