import {error, noError} from '.';
import GetRecommendedTopicsViewModel from '../../app/API/ViewModels/Topics/GetRecommendedTopicsViewModel';
import Topics from '../../app/API/Domains/Topics';
import CreateRoleViewModel from '../../app/API/ViewModels/Topics/CreateRoleViewModel';

export function mockTopics() {
  mockCreateRole();
  mockGetRecommendedTopicsAction();
}

function mockGetRecommendedTopicsAction() {
  jest.spyOn(Topics, 'GetRecommendedTopics');
  const mocked = Topics.GetRecommendedTopics as jest.MockedFunction<
    typeof Topics.GetRecommendedTopics
  >;
  mocked.mockImplementation(({limit, offset}) => {
    if (offset > -1 && limit > -1)
      return noError<GetRecommendedTopicsViewModel.Response>({
        count: 3,
        next: '',
        previous: '',
        results: [
          {
            id: 0,
            url: '',
            avatar: '',
            title: 'Title 1',
            description: 'Description 1',
          },
          {
            id: 1,
            url: '',
            avatar: '',
            title: 'Title 2',
            description: 'Description 2',
          },
          {
            id: 2,
            url: '',
            avatar: '',
            title: 'Title 3',
            description: 'Description 3',
          },
        ],
      });
    return error(400);
  });
}

function mockCreateRole() {
  jest.spyOn(Topics, 'CreateRole');
  const mocked = Topics.CreateRole as jest.MockedFunction<
    typeof Topics.CreateRole
  >;
  mocked.mockImplementation(({users, title, topicId}) => {
    if (topicId === -1)
      return noError<CreateRoleViewModel.Response>({
        id: 0,
        title: title,
        users_detail: users.map((u) => {
          return {id: u, email: '', avatar: '', last_name: '', first_name: ''};
        }),
      });
    return error(400);
  });
}
