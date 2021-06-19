import BaseResponse from '../../Common/BaseResponse';
import TopicUsersListSerializerDto from '../../DTOs/TopicUsersListSerializerDto';

namespace GetTopicUsersViewModel {
  export interface Request {
    limit: number;
    offset: number;
    topicId: string;
  }

  export interface Response extends BaseResponse {
    next: string;
    count: number;
    previous: string;
    results: TopicUsersListSerializerDto[];
  }
}

export default GetTopicUsersViewModel;
