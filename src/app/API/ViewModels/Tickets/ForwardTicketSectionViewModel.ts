import BaseResponse from '../../Common/BaseResponse';
import TicketDto from '../../DTOs/TicketDto';

namespace ForwardTicketSectionViewModel {
  export interface Request {
    ticketId: number;
    section: number;
  }

  export interface Response extends BaseResponse, TicketDto {}
}

export default ForwardTicketSectionViewModel;
