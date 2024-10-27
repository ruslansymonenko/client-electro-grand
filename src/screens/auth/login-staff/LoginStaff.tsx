import { FC } from 'react';
import LoginFormAdmin from '@/components/store/forms/login-form-admin/LoginFormAdmin';

const LoginStaff: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <LoginFormAdmin />
    </div>
  );
};

export default LoginStaff;
