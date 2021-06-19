import BaseResponse from '../../Common/BaseResponse';
import TicketListItemDto from '../../DTOs/TicketListItemDto';

namespace CreateTicketsViewModel {
  export interface Request {
    section: number;
    text: string;
    tags: string;
    title: string;
    priority: number;
    attachments: File[];
  }

  export interface Response extends BaseResponse, TicketListItemDto {}
}

export default CreateTicketsViewModel;
