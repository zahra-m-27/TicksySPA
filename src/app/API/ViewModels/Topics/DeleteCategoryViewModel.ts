import BaseResponse from '../../Common/BaseResponse';

namespace DeleteCategoryViewModel {
  export interface Request {
    topicId: number;
    categoryId: number;
  }

  export type Response = BaseResponse;
}

export default DeleteCategoryViewModel;
