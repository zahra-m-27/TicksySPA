import UserSerializerRestrictedDto from "./UserSerializerRestrictedDto";

export default interface TopicDto {
  id: number;
  url: string;
  role: string;
  title: string;
  avatar: string;
  description: string;
  creator: UserSerializerRestrictedDto;
  supporters: UserSerializerRestrictedDto[];
}
