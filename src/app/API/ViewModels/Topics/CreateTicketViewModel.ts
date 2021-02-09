import TicketDto from "../../DTOs/TicketDto";
import BaseResponse from "../../Common/BaseResponse";

namespace CreateTicketsViewModel {
  export interface Request {
    slug: string;
    text: string;
    title: string;
    priority: string;
    attachments: number[];
  }

  export interface Response extends BaseResponse, TicketDto {}
}

export default CreateTicketsViewModel;