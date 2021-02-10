import { Post } from "../fetch";
import GetTopicViewModel from "../ViewModels/Topics/GetTopicViewModel";
import GetTopicsViewModel from "../ViewModels/Topics/GetTopicsViewModel";
import GetTicketViewModel from "../ViewModels/Topics/GetTicketViewModel";
import CreateTopicViewModel from "../ViewModels/Topics/CreateTopicViewModel";
import UpdateTopicViewModel from "../ViewModels/Topics/UpdateTopicViewModel";
import DeleteTopicViewModel from "../ViewModels/Topics/DeleteTopicViewModel";
import CreateTicketViewModel from "../ViewModels/Topics/CreateTicketViewModel";
import GetTopicTicketsViewModel from "../ViewModels/Topics/GetTopicTicketsViewModel";

const ControllerName = "topics";

function GetTopics(args: GetTopicsViewModel.Request) {
  return Post<GetTopicsViewModel.Response>(
    ControllerName + "/?page=" + args.page,
    undefined,
    "GET"
  );
}
function CreateTopic(args: CreateTopicViewModel.Request) {
  const formData = new FormData();
  formData.append("slug", args.slug);
  formData.append("title", args.title);
  if (args.avatar) {
    formData.append("avatar", args.avatar);
  }
  formData.append("description", args.description);
  for (let supporters_id of args.supporters_ids)
    formData.append("supporters_ids", `${supporters_id}`);
  return Post<CreateTopicViewModel.Response>(ControllerName + "/", formData);
}
function GetTopic(args: GetTopicViewModel.Request) {
  return Post<GetTopicViewModel.Response>(
    ControllerName + `/${args.slug}/`,
    undefined,
    "GET"
  );
}
function UpdateTopic(args: UpdateTopicViewModel.Request) {
  const formData = new FormData();
  formData.append("slug", args.slug);
  formData.append("title", args.title);
  if (args.avatar) {
    formData.append("avatar", args.avatar);
  }
  formData.append("description", args.description);
  for (let supporters_id of args.supporters_ids)
    formData.append("supporters_ids", `${supporters_id}`);
  return Post<UpdateTopicViewModel.Response>(
    ControllerName + `/${args.slug}/`,
    args,
    "PATCH"
  );
}
function DeleteTopic(args: DeleteTopicViewModel.Request) {
  return Post<DeleteTopicViewModel.Response>(
    ControllerName + `/${args.slug}/`,
    undefined,
    "DELETE"
  );
}
function GetTopicTickets(args: GetTopicTicketsViewModel.Request) {
  return Post<GetTopicTicketsViewModel.Response>(
    ControllerName +
      `/${args.slug}/tickets/?` +
      new URLSearchParams(args as any).toString(),
    undefined,
    "GET"
  );
}
function CreateTicket(args: CreateTicketViewModel.Request) {
  const formData = new FormData();
  formData.append("slug", args.slug);
  formData.append("text", args.text);
  formData.append("title", args.title);
  for (let attachment of args.attachments)
    formData.append("attachments", attachment);
  formData.append("priority", `${args.priority}`);
  return Post<CreateTicketViewModel.Response>(
    ControllerName + `/${args.slug}/tickets/`,
    formData,
    "POST"
  );
}
function GetTicket(args: GetTicketViewModel.Request) {
  return Post<GetTicketViewModel.Response[]>(
    ControllerName + `/topics/${args.slug}/tickets/${args.id}/`,
    undefined,
    "GET"
  );
}

const Actions = {
  GetTopic,
  GetTicket,
  GetTopics,
  CreateTopic,
  UpdateTopic,
  DeleteTopic,
  CreateTicket,
  GetTopicTickets,
};

export default Actions;
