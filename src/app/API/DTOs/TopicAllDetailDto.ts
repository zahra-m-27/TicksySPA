import CategoryDto from './CategoryDto';
import AdminsFieldDto from './AdminsFieldDto';
import UserSerializerRestrictedDto from './UserSerializerRestrictedDto';

export default interface TopicAllDetailDto {
  id: number;
  creator: UserSerializerRestrictedDto;
  role: string;
  title: string;
  description: string;
  section_set: CategoryDto[];
  admins: AdminsFieldDto[];
  url: string;
  avatar: string;
}
