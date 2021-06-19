import BaseResponse from '../../Common/BaseResponse';
import TopicAllDetail from '../../DTOs/TopicAllDetailDto';

namespace TopicAllDetailViewModel {
  export interface Request {
    limit: number;
    offset: number;
  }

  export interface Response extends BaseResponse {
    results: TopicAllDetail[];
  }
}

export default TopicAllDetailViewModel;
