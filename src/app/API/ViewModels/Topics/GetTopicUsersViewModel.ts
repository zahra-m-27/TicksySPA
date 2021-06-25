import BaseResponse from '../../Common/BaseResponse';
import TopicUsersListSerializerDto from '../../DTOs/TopicUsersListSerializerDto';

namespace GetTopicUsersViewModel {
  export interface Request {
    limit: number;
    offset: number;
    topicId: number;
  }

  export interface Response extends BaseResponse {
    count: number;
    results: TopicUsersListSerializerDto[];
  }
}

export default GetTopicUsersViewModel;
