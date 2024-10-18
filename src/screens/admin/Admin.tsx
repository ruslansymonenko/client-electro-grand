import { FC } from 'react';
import ControlBtns from '@/components/admin/control-btns/ControlBtns';

const Admin: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <div className="my-14">
        <div>
          <h2 className="font-bold text-3xl mb-4">Управління магазином</h2>
          <section className="mb-4 w-3/4">
            <ControlBtns />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Admin;
