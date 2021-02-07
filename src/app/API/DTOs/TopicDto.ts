import UserSerializerRestrictedDto from "./UserSerializerRestrictedDto";

export default interface TopicDto {
  id: number;
  url: string;
  role: string;
  title: string;
  avatar: string;
  description: string;
  supporters_ids: number[];
  creator: UserSerializerRestrictedDto;
  supporters: UserSerializerRestrictedDto[];
}
