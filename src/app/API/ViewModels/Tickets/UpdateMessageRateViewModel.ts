import BaseResponse from '../../Common/BaseResponse';
import MessageUpdateDto from '../../DTOs/MessageUpdateDto';

namespace UpdateMessageRateViewModel {
  export interface Request {
    messageId: number;
    rate: number;
  }

  export interface Response extends BaseResponse, MessageUpdateDto {}
}

export default UpdateMessageRateViewModel;
