import UserSerializerRestrictedDto from './UserSerializerRestrictedDto';

export default interface TopicAdminListItemDto {
  id: number;
  title: string;
  users_detail: UserSerializerRestrictedDto[];
}
