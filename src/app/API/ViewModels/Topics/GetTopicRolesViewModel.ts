import TopicAdminListItemDto from '../../DTOs/TopicAdminListItemDto';

namespace GetTopicRolesViewModel {
  export interface Request {
    limit: number;
    offset: number;
    topicId: number;
  }

  export interface Response {
    count: number;
    results: TopicAdminListItemDto[];
  }
}

export default GetTopicRolesViewModel;
