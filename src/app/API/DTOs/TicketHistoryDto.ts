import UserSerializerRestrictedDto from './UserSerializerRestrictedDto';
import AdminsFieldDto from './AdminsFieldDto';

export default interface TicketHistoryDto {
  id: number;
  date: Date;
  admin: AdminsFieldDto;
  operator: UserSerializerRestrictedDto;
}
