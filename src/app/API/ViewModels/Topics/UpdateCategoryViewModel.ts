import BaseResponse from '../../Common/BaseResponse';
import TopicListItemDto from '../../DTOs/TopicListItemDto';
import CategoryDto from '../../DTOs/CategoryDto';

namespace UpdateCategoryViewModel {
  export interface Request {
    topicId: number;
    categoryId: number;
    admin: number;
    title: string;
    description: string;
    avatar: string;
  }

  export interface Response extends BaseResponse, CategoryDto {}
}

export default UpdateCategoryViewModel;
