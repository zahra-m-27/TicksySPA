import BaseResponse from '../../Common/BaseResponse';
import TopicListItemDto from '../../DTOs/TopicListItemDto';
import CategoryDto from '../../DTOs/CategoryDto';
import TopicAdminDto from '../../DTOs/TopicAdminDto';
import TopicAdminListItemDto from '../../DTOs/TopicAdminListItemDto';

namespace CreateRoleViewModel {
  export interface Request {
    topicId: number;
    title: string;
    users: number[];
  }

  export interface Response extends BaseResponse, TopicAdminListItemDto {}
}

export default CreateRoleViewModel;
