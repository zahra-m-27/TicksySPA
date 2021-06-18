import UserSerializerRestrictedDto from './UserSerializerRestrictedDto';

export default interface TopicAdminDto {
  id: number;
  title: string;
  users_detail: UserSerializerRestrictedDto[];
}
