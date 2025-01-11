import { FC } from 'react';
import { IUserResponse } from '@/types/server-response-types/user-response';
import AdminUsersListItem from '@/components/admin/admin-users-list-item/AdminUsersListItem';

interface IProps {
  users: IUserResponse[];
}

const AdminUsersList: FC<IProps> = ({ users }) => {
  return (
    <div className="w-full">
      <h2 className="font-bold text-xl mb-4">Список користувачів</h2>
      <ul className="w-full bg-gray-100 min-h-40 p-2">
        {users.map((item) => (
          <AdminUsersListItem user={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default AdminUsersList;
