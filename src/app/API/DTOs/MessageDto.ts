import AttachmentDto from './AttachmentDto';
import UserSerializerRestrictedDto from './UserSerializerRestrictedDto';

export default interface MessageDto {
  id: number;
  url: string;
  rate: number;
  text: string;
  date: Date;
  attachments: string[];
  attachment_set: AttachmentDto[];
  user: UserSerializerRestrictedDto;
}
