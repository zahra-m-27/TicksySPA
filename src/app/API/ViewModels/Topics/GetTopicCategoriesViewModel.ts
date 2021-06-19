import CategoryDto from '../../DTOs/CategoryDto';

namespace GetTopicCategoriesViewModel {
  export interface Request {
    topicId: number;
    offset: number;
    limit: number;
  }

  export interface Response {
    count: number;
    results: CategoryDto[];
  }
}

export default GetTopicCategoriesViewModel;
