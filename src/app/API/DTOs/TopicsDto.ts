import UserSerializerRestrictedDto from './UserSerializerRestrictedDto';

export default interface TopicsDto {
  id: number;
  url: string;
  role: string;
  slug: string;
  title: string;
  avatar: string;
  description: string;
  supporters_ids: number[];
  creator: UserSerializerRestrictedDto;
  supporters: UserSerializerRestrictedDto[];
}
