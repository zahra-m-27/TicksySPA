import BaseResponse from '../../Common/BaseResponse';
import TopicListItemDto from '../../DTOs/TopicListItemDto';
import CategoryDto from '../../DTOs/CategoryDto';

namespace GetCategoryViewModel {
  export interface Request {
    topicId: number;
    categoryId: number;
  }

  export interface Response extends BaseResponse, CategoryDto {}
}

export default GetCategoryViewModel;
