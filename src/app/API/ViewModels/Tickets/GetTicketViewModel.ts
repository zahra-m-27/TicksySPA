import TicketDto from '../../DTOs/TicketDto';
import BaseResponse from '../../Common/BaseResponse';

namespace GetTicketViewModel {
  export interface Request {
    id: number;
  }

  export interface Response extends BaseResponse, TicketDto {}
}

export default GetTicketViewModel;
