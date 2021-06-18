import AdminsFieldDto from './AdminsFieldDto';

export default interface TopicUsersListSerializerDto {
  id: number;
  email: string;
  avatar: string;
  last_name: string;
  first_name: string;
  is_creator: boolean;
  admin_set: AdminsFieldDto[];
}
