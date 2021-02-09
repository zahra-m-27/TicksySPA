import UserSerializerRestrictedDto from "./UserSerializerRestrictedDto";

export default interface TicketDto {
  id: number;
  text: string;
  title: string;
  status: number;
  priority: number;
  last_update: Date;
  creation_date: Date;
  attachments: string[];
  creator: UserSerializerRestrictedDto;
}