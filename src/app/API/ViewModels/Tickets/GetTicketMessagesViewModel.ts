import TicketDto from "../../DTOs/TicketDto";
import MessageDto from "../../DTOs/MessageDto";
import BaseResponse from "../../Common/BaseResponse";

namespace GetTicketMessagesViewModel {
  export interface Request {
    id: number;
  }

  export interface Response extends BaseResponse {
    next: string;
    count: number;
    previous: string;
    results: MessageDto[];
  }
}

export default GetTicketMessagesViewModel;
