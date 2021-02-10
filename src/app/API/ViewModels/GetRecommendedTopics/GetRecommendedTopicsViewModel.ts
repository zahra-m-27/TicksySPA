import BaseResponse from "../../Common/BaseResponse";
import RecommendedTopicsDto from "../../DTOs/RecommendedTopicsDto";

namespace GetRecommendedTopicsViewModel {
  export interface Request {
    page: number;
  }

  export interface Response extends BaseResponse {
    next: string;
    count: number;
    previous: string;
    results: RecommendedTopicsDto[];
  }
}

export default GetRecommendedTopicsViewModel;
