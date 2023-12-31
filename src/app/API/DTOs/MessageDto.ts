import AttachmentDto from './AttachmentDto';
import UserSerializerRestrictedDto from './UserSerializerRestrictedDto';

export default interface MessageDto {
  id: number;
  url: string;
  rate: number;
  text: string;
  date: Date;
  attachment_set: AttachmentDto[];
  user: UserSerializerRestrictedDto;
}
