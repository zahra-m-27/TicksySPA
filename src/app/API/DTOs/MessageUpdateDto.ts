import AttachmentDto from './AttachmentDto';
import UserSerializerRestrictedDto from './UserSerializerRestrictedDto';

export default interface MessageUpdateDto {
  id: number;
  rate: number;
  text: string;
  date: Date;
  attachment_set: AttachmentDto[];
  user: UserSerializerRestrictedDto;
}
