import BaseResponse from '../../Common/BaseResponse';
import MessageDto from '../../DTOs/MessageDto';

namespace GetTicketViewModel {
  export interface Request {
    id: string;
    slug: string;
  }

  export type Response = MessageDto;
}

export default GetTicketViewModel;
