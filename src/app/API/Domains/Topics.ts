import {Delete, Get, Post} from '../fetch';
import GetTopicViewModel from '../ViewModels/Topics/GetTopicViewModel';
import GetTopicsViewModel from '../ViewModels/Topics/GetTopicsViewModel';
import CreateTopicViewModel from '../ViewModels/Topics/CreateTopicViewModel';
import UpdateTopicViewModel from '../ViewModels/Topics/UpdateTopicViewModel';
import DeleteTopicViewModel from '../ViewModels/Topics/DeleteTopicViewModel';
import TopicAllDetailViewModel from '../ViewModels/Topics/TopicAllDetailViewModel';
import GetRecommendedTopicsViewModel from '../ViewModels/Topics/GetRecommendedTopicsViewModel';
import GetTopicCategoriesViewModel from '../ViewModels/Topics/GetTopicCategoriesViewModel';
import CreateCategoryViewModel from '../ViewModels/Topics/CreateCategoryViewModel';
import GetCategoryViewModel from '../ViewModels/Topics/GetCategoryViewModel';
import UpdateCategoryViewModel from '../ViewModels/Topics/UpdateCategoryViewModel';
import DeleteCategoryViewModel from '../ViewModels/Topics/DeleteCategoryViewModel';
import GetTopicRolesViewModel from '../ViewModels/Topics/GetTopicRolesViewModel';
import CreateRoleViewModel from '../ViewModels/Topics/CreateRoleViewModel';
import GetRoleViewModel from '../ViewModels/Topics/GetRoleViewModel';
import UpdateRoleViewModel from '../ViewModels/Topics/UpdateRoleViewModel';
import DeleteRoleViewModel from '../ViewModels/Topics/DeleteRoleViewModel';
import GetTopicUsersViewModel from '../ViewModels/Topics/GetTopicUsersViewModel';
import UpdateRoleUsersViewModel from '../ViewModels/Topics/UpdateRoleUsersViewModel';

const ControllerName = 'topic';

function GetTopics(args: GetTopicsViewModel.Request) {
  return Get<GetTopicsViewModel.Response>(ControllerName + '/', args);
}

function CreateTopic(args: CreateTopicViewModel.Request) {
  const formData = new FormData();
  formData.append('title', args.title);
  if (args.avatar) {
    formData.append('avatar', args.avatar);
  }
  formData.append('description', args.description);
  return Post<CreateTopicViewModel.Response>(ControllerName + '/', formData);
}

function GetTopic(args: GetTopicViewModel.Request) {
  return Get<GetTopicViewModel.Response>(
    ControllerName + `/${args.topicId}/`,
    {}
  );
}

function UpdateTopic(args: UpdateTopicViewModel.Request) {
  const formData = new FormData();
  formData.append('title', args.title);
  if (args.avatar) {
    formData.append('avatar', args.avatar);
  }
  formData.append('description', args.description);
  return Post<UpdateTopicViewModel.Response>(
    ControllerName + `/${args.topicId}/`,
    args,
    'PUT'
  );
}

function DeleteTopic(args: DeleteTopicViewModel.Request) {
  return Delete<DeleteTopicViewModel.Response>(
    ControllerName + `/${args.topicId}/`
  );
}

function TopicAllDetail(args: TopicAllDetailViewModel.Request) {
  return Get<TopicAllDetailViewModel.Response>(`all-topics/`, args);
}

function GetRecommendedTopics(args: GetRecommendedTopicsViewModel.Request) {
  return Get<GetRecommendedTopicsViewModel.Response>(
    'get-recommended-topics/',
    args
  );
}

function GetTopicCategories(args: GetTopicCategoriesViewModel.Request) {
  return Get<GetTopicCategoriesViewModel.Response>(
    ControllerName + `/${args.topicId}/category/`,
    args
  );
}

function CreateCategory(args: CreateCategoryViewModel.Request) {
  return Post<CreateCategoryViewModel.Response>(
    ControllerName + `/${args.topicId}/category/`,
    args
  );
}

function GetCategory(args: GetCategoryViewModel.Request) {
  return Get<GetCategoryViewModel.Response>(
    ControllerName + `/${args.topicId}/category/${args.categoryId}/`,
    args
  );
}

function UpdateCategory(args: UpdateCategoryViewModel.Request) {
  const formData = new FormData();
  formData.append('admin', args.admin.toString());
  formData.append('title', args.title);
  if (args.avatar) {
    formData.append('avatar', args.avatar);
  }
  formData.append('description', args.description);
  return Post<UpdateCategoryViewModel.Response>(
    ControllerName + `/${args.topicId}/category/${args.categoryId}/`,
    args,
    'PUT'
  );
}

function DeleteCategory(args: DeleteCategoryViewModel.Request) {
  return Delete<DeleteCategoryViewModel.Response>(
    ControllerName + `/${args.topicId}/category/${args.categoryId}/`
  );
}

function GetTopicRoles(args: GetTopicRolesViewModel.Request) {
  return Get<GetTopicRolesViewModel.Response>(
    ControllerName + `/${args.topicId}/role/`,
    args
  );
}

function GetTopicUsers(args: GetTopicUsersViewModel.Request) {
  return Get<GetTopicUsersViewModel.Response>(
    ControllerName + `/${args.topicId}/get-all-users/`,
    args
  );
}

function CreateRole(args: CreateRoleViewModel.Request) {
  return Post<CreateRoleViewModel.Response>(
    ControllerName + `/${args.topicId}/role/`,
    args
  );
}

function GetRole(args: GetRoleViewModel.Request) {
  return Get<GetRoleViewModel.Response>(
    ControllerName + `/${args.topicId}/role/${args.roleId}/`,
    args
  );
}

function UpdateRole(args: UpdateRoleViewModel.Request) {
  const formData = new FormData();
  formData.append('title', args.title);
  for (const user of args.users) {
    formData.append('users', `${user}`);
  }
  return Post<UpdateRoleViewModel.Response>(
    ControllerName + `/${args.topicId}/role/${args.roleId}/`,
    args,
    'PUT'
  );
}

function UpdateRoleUsers(args: UpdateRoleUsersViewModel.Request) {
  const formData = new FormData();
  for (const user of args.users) {
    formData.append('users', `${user}`);
  }
  return Post<UpdateRoleUsersViewModel.Response>(
    ControllerName + `/${args.topicId}/role/${args.roleId}/`,
    args,
    'PATCH'
  );
}

function DeleteRole(args: DeleteRoleViewModel.Request) {
  return Delete<DeleteRoleViewModel.Response>(
    ControllerName + `/${args.topicId}/role/${args.roleId}/`
  );
}

const Actions = {
  GetRole,
  GetTopic,
  GetTopics,
  DeleteRole,
  UpdateRole,
  CreateRole,
  CreateTopic,
  UpdateTopic,
  DeleteTopic,
  GetCategory,
  GetTopicRoles,
  GetTopicUsers,
  CreateCategory,
  DeleteCategory,
  UpdateCategory,
  TopicAllDetail,
  UpdateRoleUsers,
  GetTopicCategories,
  GetRecommendedTopics,
};

export default Actions;
