import { Post } from "../fetch";
import GetTicketsViewModel from "../ViewModels/Tickets/GetTicketsViewModel";
import GetTicketDetailViewModel from "../ViewModels/Tickets/GetTicketDetailViewModel";
import GetTicketMessagesViewModel from "../ViewModels/Tickets/GetTicketMessagesViewModel";

const ControllerName = "tickets";

function GetTickets(args: GetTicketsViewModel.Request) {
  return Post<GetTicketsViewModel.Response>(
    ControllerName + "/?" + new URLSearchParams(args as any).toString(),
    undefined,
    "GET"
  );
}
function GetTicketDetail(args: GetTicketDetailViewModel.Request) {
  return Post<GetTicketDetailViewModel.Response>(
    ControllerName + `/${args.id}/get-detail/`,
    undefined,
    "GET"
  );
}

function CreateTickets(args: GetTicketsViewModel.Request) {
  return Post<GetTicketsViewModel.Response>(
    ControllerName + "/?" + new URLSearchParams(args as any).toString(),
    undefined,
    "GET"
  );
}

function GetTicketMessages(args: GetTicketMessagesViewModel.Request) {
  return Post<GetTicketMessagesViewModel.Response[]>(
    ControllerName + `/${args.id}/`,
    undefined,
    "GET"
  );
}

const Actions = {
  GetTickets,
  CreateTickets,
  GetTicketDetail,
  GetTicketMessages,
};

export default Actions;
