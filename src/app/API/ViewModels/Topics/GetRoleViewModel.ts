import BaseResponse from '../../Common/BaseResponse';
import TopicListItemDto from '../../DTOs/TopicListItemDto';
import CategoryDto from '../../DTOs/CategoryDto';
import TopicAdminDto from '../../DTOs/TopicAdminDto';

namespace GetRoleViewModel {
  export interface Request {
    topicId: number;
    roleId: number;
  }

  export interface Response extends BaseResponse, TopicAdminDto {}
}

export default GetRoleViewModel;
