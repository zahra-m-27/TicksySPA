import UserSerializerRestrictedDto from './UserSerializerRestrictedDto';
import MessageDto from './MessageDto';

export default interface TicketListItemDto {
  id: number;
  text: string;
  tags: string;
  title: string;
  status: string;
  priority: number;
  last_update: Date;
  creation_date: Date;
  creator: UserSerializerRestrictedDto;
}
