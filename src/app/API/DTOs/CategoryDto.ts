import AdminsFieldDto from './AdminsFieldDto';

export default interface CategoryDto {
  id: number;
  title: string;
  avatar: string;
  description: string;
  get_last_ticket_date: Date;
  admin_detail: AdminsFieldDto;
  get_open_ticket_count: number;
}
