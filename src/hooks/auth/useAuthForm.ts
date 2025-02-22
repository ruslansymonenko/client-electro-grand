import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthForm } from '@/types/app-types/auth-form';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth/auth.service';
import toast from 'react-hot-toast';
import { PRIVATE_URL } from '@/config/url.config';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/utils/getErrorMessage/getErrorMessage';

export function useAuthForm(type: 'login' | 'register' | 'login-admin') {
  const router = useRouter();

  const form = useForm<IAuthForm>({
    mode: 'onChange',
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ['auth user'],
    mutationFn: (data: IAuthForm) => {
      if (type === 'register') {
        return authService.register(data);
      } else if (type === 'login-admin') {
        return authService.loginAdmin(data);
      } else {
        return authService.login(data);
      }
    },
    onSuccess() {
      form.reset();
      toast.success('Успішна авторизація');
      router.replace(PRIVATE_URL.customer());
    },
    onError(error: AxiosError) {
      const errorMessage: string = getErrorMessage(error);

      toast.error(`${errorMessage}`);
    },
  });

  const onSubmit: SubmitHandler<IAuthForm> = (data) => {
    mutate(data);
  };

  return { onSubmit, form, isPending };
}
