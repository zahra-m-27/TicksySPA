import UserSerializerRestrictedDto from "./UserSerializerRestrictedDto";

export default interface TicketDto {
  id: number;
  text: string;
  title: string;
  status: number;
  priority: number;
  attachments: string[];
  creator: UserSerializerRestrictedDto;
}
