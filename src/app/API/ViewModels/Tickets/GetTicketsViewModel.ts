import BaseResponse from '../../Common/BaseResponse';
import TicketListItemDto from '../../DTOs/TicketListItemDto';

namespace GetTicketsViewModel {
  export interface Request {
    limit: number;
    offset: number;
    search: string;
    section__topic?: number;
    status?: number;
    type: number;
  }

  export interface Response extends BaseResponse {
    count: number;
    results: TicketListItemDto[];
  }
}

export default GetTicketsViewModel;
