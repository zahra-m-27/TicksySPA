import MessageDto from '../../DTOs/MessageDto';

namespace GetTicketMessagesViewModel {
  export interface Request {
    id: number;
  }

  export type Response = MessageDto;
}

export default GetTicketMessagesViewModel;
