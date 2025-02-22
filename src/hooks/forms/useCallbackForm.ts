import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/utils/getErrorMessage/getErrorMessage';
import { formsService, ICallbackFromData } from '@/services/forms/forms.service';
import { closeCallbackModal } from '@/store/slices/modals/callbackModalSlice';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';

export function useCallbackForm() {
  const dispatch: AppDispatch = useDispatch();

  const form = useForm<ICallbackFromData>({
    mode: 'onChange',
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ['callback form'],
    mutationFn: (data: ICallbackFromData) => {
      return formsService.callback(data);
    },
    // @ts-ignore
    onSuccess(responseData) {
      form.reset();
      toast.success('Дякуємо! Ви отримаєте відповідь в найближчий час!');
      dispatch(closeCallbackModal());
    },
    onError(error: AxiosError) {
      const errorMessage: string = getErrorMessage(error);

      toast.error(`${errorMessage}`);
      dispatch(closeCallbackModal());
    },
  });

  const onSubmit: SubmitHandler<ICallbackFromData> = (data) => {
    mutate(data);
  };

  return { onSubmit, form, isPending };
}
