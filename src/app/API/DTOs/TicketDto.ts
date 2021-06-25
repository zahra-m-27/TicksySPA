import UserSerializerRestrictedDto from './UserSerializerRestrictedDto';
import MessageDto from './MessageDto';
import CategoryDto from './CategoryDto';
import AdminsFieldDto from './AdminsFieldDto';

export default interface TicketDto {
  id: number;
  tags: string;
  title: string;
  status: string;
  priority: number;
  last_update: Date;
  section: CategoryDto;
  creation_date: Date;
  admins: AdminsFieldDto[];
  message_set: MessageDto[];
  other_sections: CategoryDto[];
  creator: UserSerializerRestrictedDto;
}
