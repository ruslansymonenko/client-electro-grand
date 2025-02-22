import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/utils/getErrorMessage/getErrorMessage';
import { formsService, IContactFromData } from '@/services/forms/forms.service';
import { closeCallbackModal } from '@/store/slices/modals/callbackModalSlice';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';

export function useContactForm() {
  const dispatch: AppDispatch = useDispatch();

  const form = useForm<IContactFromData>({
    mode: 'onChange',
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ['contact form'],
    mutationFn: (data: IContactFromData) => {
      return formsService.contact(data);
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

  const onSubmit: SubmitHandler<IContactFromData> = (data) => {
    mutate(data);
  };

  return { onSubmit, form, isPending };
}
