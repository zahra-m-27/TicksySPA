import TicketDto from '../../DTOs/TicketDto';
import BaseResponse from '../../Common/BaseResponse';
import TicketListItemDto from '../../DTOs/TicketListItemDto';

namespace GetTicketsViewModel {
  export interface Request {
    page: number;
    search: string;
    status: number;
  }

  export interface Response extends BaseResponse {
    next: string;
    count: number;
    previous: string;
    results: TicketListItemDto[];
  }
}

export default GetTicketsViewModel;
