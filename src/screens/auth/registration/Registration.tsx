import { FC } from 'react';
import RegistrationForm from '@/components/store/forms/registration-form/RegistrationForm';

const Registration: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <RegistrationForm />
    </div>
  );
};

export default Registration;
