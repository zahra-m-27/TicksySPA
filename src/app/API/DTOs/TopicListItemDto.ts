import UserSerializerRestrictedDto from './UserSerializerRestrictedDto';
import AdminsFieldDto from './AdminsFieldDto';

export default interface TopicListItemDto {
  id: number;
  url: string;
  role: string;
  title: string;
  avatar: string;
  description: string;
  admins: AdminsFieldDto[];
  creator: UserSerializerRestrictedDto;
}
