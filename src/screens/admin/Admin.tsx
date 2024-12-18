'use client';

import { FC } from 'react';
import AdminNav from '@/components/admin/admin-nav/AdminNav';

const Admin: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight relative">
      <div className="my-14">
        <div>
          <h2 className="font-bold text-3xl mb-4">Управління магазином</h2>
          <section className="mb-4 flex flex-col items-center w-full">
            <AdminNav />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Admin;
