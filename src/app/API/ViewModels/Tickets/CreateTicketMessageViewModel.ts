import BaseResponse from '../../Common/BaseResponse';

namespace CreateTicketMessageViewModel {
  export interface Request {
    id: number;
    text: string;
    attachments: File[];
  }

  export type Response = BaseResponse;
}

export default CreateTicketMessageViewModel;
