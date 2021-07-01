import {error, noError} from '.';
import GetRecommendedTopicsViewModel from '../../app/API/ViewModels/Topics/GetRecommendedTopicsViewModel';
import Topics from '../../app/API/Domains/Topics';
import CreateRoleViewModel from '../../app/API/ViewModels/Topics/CreateRoleViewModel';
import TopicAllDetailViewModel from '../../app/API/ViewModels/Topics/TopicAllDetailViewModel';
import GetTopicRolesViewModel from '../../app/API/ViewModels/Topics/GetTopicRolesViewModel';
import GetRoleViewModel from '../../app/API/ViewModels/Topics/GetRoleViewModel';
import UpdateRoleUsersViewModel from '../../app/API/ViewModels/Topics/UpdateRoleUsersViewModel';
import UpdateRoleViewModel from '../../app/API/ViewModels/Topics/UpdateRoleViewModel';
import GetTopicCategoriesViewModel from '../../app/API/ViewModels/Topics/GetTopicCategoriesViewModel';
import GetTopicViewModel from '../../app/API/ViewModels/Topics/GetTopicViewModel';
import GetTopicsViewModel from '../../app/API/ViewModels/Topics/GetTopicsViewModel';
import CreateCategoryViewModel from '../../app/API/ViewModels/Topics/CreateCategoryViewModel';
import GetCategoryViewModel from '../../app/API/ViewModels/Topics/GetCategoryViewModel';
import UpdateCategoryViewModel from '../../app/API/ViewModels/Topics/UpdateCategoryViewModel';
import CreateTopicViewModel from '../../app/API/ViewModels/Topics/CreateTopicViewModel';
import UpdateTopicViewModel from '../../app/API/ViewModels/Topics/UpdateTopicViewModel';
import GetTopicUsersViewModel from '../../app/API/ViewModels/Topics/GetTopicUsersViewModel';

export function mockTopics() {
  mockGetRole();
  mockGetTopic();
  mockGetTopics();
  mockUpdateRole();
  mockCreateRole();
  mockUpdateTopic();
  mockCreateTopic();
  mockGetCategory();
  mockGetTopicUsers();
  mockGetTopicRoles();
  mockTopicAllDetail();
  mockCreateCategory();
  mockUpdateCategory();
  mockUpdateRoleUsers();
  mockGetTopicCategories();
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

function mockGetTopic() {
  jest.spyOn(Topics, 'GetTopic');
  const mocked = Topics.GetTopic as jest.MockedFunction<typeof Topics.GetTopic>;
  mocked.mockImplementation(({topicId}) => {
    if (topicId !== -1)
      return noError<GetTopicViewModel.Response>({
        id: 0,
        title: 'Title',
        avatar: '',
        url: '',
        role: '',
        admins: [],
        description: 'Description',
        creator: {
          id: 0,
          avatar: '',
          email: '',
          last_name: '',
          first_name: '',
        },
      });
    return error(404);
  });
}

function mockGetTopics() {
  jest.spyOn(Topics, 'GetTopics');
  const mocked = Topics.GetTopics as jest.MockedFunction<
    typeof Topics.GetTopics
  >;
  mocked.mockImplementation(({offset, limit}) => {
    if (offset !== -1)
      return noError<GetTopicsViewModel.Response>({
        count: 1,
        results: [
          {
            id: 0,
            title: 'Title Topic 558',
            avatar: '',
            url: '',
            role: '',
            admins: [],
            description: 'Description',
            creator: {
              id: 0,
              avatar: '',
              email: '',
              last_name: '',
              first_name: '',
            },
          },
          {
            id: 0,
            title: 'Title Topic 231',
            avatar: '',
            url: '',
            role: '',
            admins: [],
            description: 'Description',
            creator: {
              id: 0,
              avatar: '',
              email: '',
              last_name: '',
              first_name: '',
            },
          },
        ],
      });
    return error(404);
  });
}

function mockGetTopicCategories() {
  jest.spyOn(Topics, 'GetTopicCategories');
  const mocked = Topics.GetTopicCategories as jest.MockedFunction<
    typeof Topics.GetTopicCategories
  >;
  mocked.mockImplementation(({topicId}) => {
    if (topicId !== -1)
      return noError<GetTopicCategoriesViewModel.Response>({
        count: 1,
        results: [
          {
            id: 0,
            title: 'Test Section 216',
            avatar: '',
            admin_detail: {
              id: 0,
              title: 'Title',
            },
            get_open_ticket_count: 1,
            description: '',
            get_last_ticket_date: new Date(),
          },
        ],
      });
    return error(400);
  });
}

function mockCreateCategory() {
  jest.spyOn(Topics, 'CreateCategory');
  const mocked = Topics.CreateCategory as jest.MockedFunction<
    typeof Topics.CreateCategory
  >;
  mocked.mockImplementation(({topicId, title}) => {
    if (title !== 'error')
      return noError<CreateCategoryViewModel.Response>({
        id: 0,
        title: 'Test Section 456',
        avatar: '',
        admin_detail: {
          id: 0,
          title: 'Title',
        },
        get_open_ticket_count: 1,
        description: '',
        get_last_ticket_date: new Date(),
      });
    return error(400);
  });
}

function mockCreateTopic() {
  jest.spyOn(Topics, 'CreateTopic');
  const mocked = Topics.CreateTopic as jest.MockedFunction<
    typeof Topics.CreateTopic
  >;
  mocked.mockImplementation(({title}) => {
    if (title === '403') {
      return error(403);
    }
    if (title !== 'error')
      return noError<CreateTopicViewModel.Response>({
        id: 0,
        title: 'Test Section 456',
        avatar: '',
        url: '',
        role: '',
        creator: {
          id: 0,
          avatar: '',
          email: '',
          last_name: '',
          first_name: '',
        },
        description: '',
        admins: [],
      });
    return error(400);
  });
}

function mockUpdateTopic() {
  jest.spyOn(Topics, 'UpdateTopic');
  const mocked = Topics.UpdateTopic as jest.MockedFunction<
    typeof Topics.UpdateTopic
  >;
  mocked.mockImplementation(({title}) => {
    if (title === '403') {
      return error(403);
    }
    if (title !== 'error')
      return noError<UpdateTopicViewModel.Response>({
        id: 0,
        title: 'Test Section 456',
        avatar: '',
        url: '',
        role: '',
        creator: {
          id: 0,
          avatar: '',
          email: '',
          last_name: '',
          first_name: '',
        },
        description: '',
        admins: [],
      });
    return error(400);
  });
}

function mockUpdateCategory() {
  jest.spyOn(Topics, 'UpdateCategory');
  const mocked = Topics.UpdateCategory as jest.MockedFunction<
    typeof Topics.UpdateCategory
  >;
  mocked.mockImplementation(({topicId, title}) => {
    if (title !== 'error')
      return noError<UpdateCategoryViewModel.Response>({
        id: 0,
        title: 'Test Section 456',
        avatar: '',
        admin_detail: {
          id: 0,
          title: 'Title',
        },
        get_open_ticket_count: 1,
        description: '',
        get_last_ticket_date: new Date(),
      });
    return error(400);
  });
}

function mockGetCategory() {
  jest.spyOn(Topics, 'GetCategory');
  const mocked = Topics.GetCategory as jest.MockedFunction<
    typeof Topics.GetCategory
  >;
  mocked.mockImplementation(({topicId}) => {
    if (topicId !== -1)
      return noError<GetCategoryViewModel.Response>({
        id: 0,
        title: 'Test Section 456',
        avatar: '',
        admin_detail: {
          id: 0,
          title: 'Title',
        },
        get_open_ticket_count: 1,
        description: '',
        get_last_ticket_date: new Date(),
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
    if (topicId !== -1)
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

function mockGetTopicRoles() {
  jest.spyOn(Topics, 'GetTopicRoles');
  const mocked = Topics.GetTopicRoles as jest.MockedFunction<
    typeof Topics.GetTopicRoles
  >;
  mocked.mockImplementation(({topicId, offset, limit}) => {
    if (topicId !== -1)
      return noError<GetTopicRolesViewModel.Response>({
        count: 1,
        results: [
          {
            id: 10,
            title: 'Title Role 456',
            users_detail: [
              {
                id: 0,
                email: '',
                avatar: '',
                last_name: '',
                first_name: '',
              },
            ],
          },
        ],
      });
    return error(400);
  });
}
function mockGetTopicUsers() {
  jest.spyOn(Topics, 'GetTopicUsers');
  const mocked = Topics.GetTopicUsers as jest.MockedFunction<
    typeof Topics.GetTopicUsers
  >;
  mocked.mockImplementation(({topicId, offset, limit}) => {
    if (topicId !== -1)
      return noError<GetTopicUsersViewModel.Response>({
        count: 1,
        results: [
          {
            id: 10,
            email: '',
            admin_set: [],
            is_creator: true,
            avatar: '',
            last_name: '',
            first_name: '',
          },
        ],
      });
    return error(400);
  });
}

function mockGetRole() {
  jest.spyOn(Topics, 'GetRole');
  const mocked = Topics.GetRole as jest.MockedFunction<typeof Topics.GetRole>;
  mocked.mockImplementation(({topicId, roleId}) => {
    if (topicId !== -1)
      return noError<GetRoleViewModel.Response>({
        id: 0,
        title: 'Title',
        users_detail: [
          {
            id: 0,
            email: '',
            avatar: '',
            last_name: '',
            first_name: '',
          },
        ],
      });
    return error(400);
  });
}

function mockUpdateRoleUsers() {
  jest.spyOn(Topics, 'UpdateRoleUsers');
  const mocked = Topics.UpdateRoleUsers as jest.MockedFunction<
    typeof Topics.UpdateRoleUsers
  >;
  mocked.mockImplementation(({topicId, roleId}) => {
    if (topicId !== -1)
      return noError<UpdateRoleUsersViewModel.Response>({
        id: 0,
        title: 'Title',
        users_detail: [
          {
            id: 0,
            email: '',
            avatar: '',
            last_name: '',
            first_name: '',
          },
        ],
      });
    return error(400);
  });
}

function mockUpdateRole() {
  jest.spyOn(Topics, 'UpdateRole');
  const mocked = Topics.UpdateRole as jest.MockedFunction<
    typeof Topics.UpdateRole
  >;
  mocked.mockImplementation(({topicId, roleId}) => {
    if (topicId !== -1)
      return noError<UpdateRoleViewModel.Response>({
        id: 0,
        title: 'Title',
        users_detail: [
          {
            id: 0,
            email: '',
            avatar: '',
            last_name: '',
            first_name: '',
          },
        ],
      });
    return error(400);
  });
}

function mockTopicAllDetail() {
  jest.spyOn(Topics, 'TopicAllDetail');
  const mocked = Topics.TopicAllDetail as jest.MockedFunction<
    typeof Topics.TopicAllDetail
  >;
  mocked.mockImplementation(({limit, offset, search}) => {
    if (search !== 'error')
      return noError<TopicAllDetailViewModel.Response>({
        results: [
          {
            id: 0,
            title: 'Test Topic 25',
            url: '',
            avatar: '',
            section_set: [
              {
                id: 0,
                title: 'Test Section 1',
                admin_detail: {
                  id: 0,
                  title: 'Title',
                },
                avatar: '',
                get_last_ticket_date: new Date(),
                description: 'Description',
                get_open_ticket_count: 0,
              },
            ],
            admins: [],
            description: 'Description',
            creator: {
              id: 0,
              avatar: '',
              email: '',
              last_name: '',
              first_name: '',
            },
            role: 'Role',
          },
        ],
      });
    return error(400);
  });
}
