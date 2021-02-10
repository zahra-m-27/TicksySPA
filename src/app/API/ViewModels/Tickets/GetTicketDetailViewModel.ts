import TicketDto from "../../DTOs/TicketDto";
import BaseResponse from "../../Common/BaseResponse";

namespace GetTicketDetailViewModel {
  export interface Request {
    id: number;
  }

  export interface Response extends BaseResponse, TicketDto {}
}

export default GetTicketDetailViewModel;
