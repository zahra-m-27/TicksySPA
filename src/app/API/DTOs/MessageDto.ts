import AttachmentDto from './AttachmentDto';
import UserSerializerRestrictedDto from './UserSerializerRestrictedDto';

export default interface MessageDto {
  id: number;
  url: string;
  rate: number;
  text: string;
  date: string;
  attachments: string[];
  attachment_set: AttachmentDto[];
  user: UserSerializerRestrictedDto;
}
