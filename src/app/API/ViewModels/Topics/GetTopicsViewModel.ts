import BaseResponse from '../../Common/BaseResponse';
import TopicsDto from '../../DTOs/TopicsDto';

namespace GetTopicsViewModel {
  export interface Request {
    page: number;
  }

  export interface Response extends BaseResponse {
    next: string;
    count: number;
    previous: string;
    results: TopicsDto[];
  }
}

export default GetTopicsViewModel;
