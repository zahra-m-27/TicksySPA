import MessageDto from "../../DTOs/MessageDto";

namespace GetTicketMessagesViewModel {
  export interface Request {
    id: number;
  }

  export interface Response extends MessageDto {}
}

export default GetTicketMessagesViewModel;
