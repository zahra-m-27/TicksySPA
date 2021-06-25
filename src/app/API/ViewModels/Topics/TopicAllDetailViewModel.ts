import BaseResponse from '../../Common/BaseResponse';
import TopicAllDetailDto from '../../DTOs/TopicAllDetailDto';

namespace TopicAllDetailViewModel {
  export interface Request {
    limit: number;
    offset: number;
    search: string;
  }

  export interface Response extends BaseResponse {
    results: TopicAllDetailDto[];
  }
}

export default TopicAllDetailViewModel;
