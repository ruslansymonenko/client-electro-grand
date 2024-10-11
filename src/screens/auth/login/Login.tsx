import { FC } from 'react';
import LoginForm from '@/components/store/forms/login-form/LoginForm';

const Login: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <LoginForm />
    </div>
  );
};

export default Login;
