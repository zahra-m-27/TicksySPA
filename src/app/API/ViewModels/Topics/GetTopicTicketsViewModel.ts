import TicketDto from '../../DTOs/TicketDto';
import BaseResponse from '../../Common/BaseResponse';

namespace GetTopicTicketsViewModel {
  export interface Request {
    page: number;
    slug: string;
    search: string;
    status: number;
  }

  export interface Response extends BaseResponse {
    next: string;
    count: number;
    previous: string;
    results: TicketDto[];
  }
}

export default GetTopicTicketsViewModel;
