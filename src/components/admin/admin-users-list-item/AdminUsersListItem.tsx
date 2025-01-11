'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Pencil, Trash } from 'lucide-react';
import { PUBLIC_URL } from '@/config/url.config';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { openDeleteCheckModal } from '@/store/slices/modals/deleteCheckModalSlice';
import { getFormatedDate } from '@/utils/getFormatedDate/getFormatedDate';
import { IUserResponse } from '@/types/server-response-types/user-response';

interface IProps {
  user: IUserResponse;
}

const AdminUsersListItem: FC<IProps> = ({ user }) => {
  const dispatch: AppDispatch = useDispatch();

  const openDeleteCheck = () => {
    if (user.id) {
      dispatch(openDeleteCheckModal(user.id));
    }
  };

  return (
    <li className="w-full p-2 bg-white rounded-md shadow-sm flex items-center justify-between min-h-10 my-2">
      <div className={'flex gap-4 justify-around w-full'}>
        <div className="mr-4">id: {user.id}</div>

        <div className="mr-4">email: {user.email}</div>
        <div className="mr-4">name: {user.name}</div>

        <div>
          <span className="mr-2">Створено:</span>
          <span>{getFormatedDate(user.createdAt.toString())}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button>
          <Pencil />
        </button>
        <button onClick={openDeleteCheck}>
          <Trash />
        </button>
      </div>
    </li>
  );
};

export default AdminUsersListItem;
