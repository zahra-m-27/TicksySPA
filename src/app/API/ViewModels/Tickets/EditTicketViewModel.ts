import TicketDto from '../../DTOs/TicketDto';
import BaseResponse from '../../Common/BaseResponse';

namespace EditTicketViewModel {
  export interface Request {
    ticketId: number;
    title: string;
    status: string;
    priority: string;
    tags: string;
  }

  export interface Response extends BaseResponse, TicketDto {}
}

export default EditTicketViewModel;
