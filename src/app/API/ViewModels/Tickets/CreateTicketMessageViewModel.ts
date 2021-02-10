import BaseResponse from "../../Common/BaseResponse";

namespace CreateTicketMessageViewModel {
  export interface Request {
    id: number;
    text: string;
    attachments: File[];
  }

  export interface Response extends BaseResponse {}
}

export default CreateTicketMessageViewModel;
