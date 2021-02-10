import { Post } from "../fetch";
import GetTicketMessagesViewModel from "../ViewModels/Tickets/GetTicketMessagesViewModel";
import GetTicketsViewModel from "../ViewModels/Tickets/GetTicketsViewModel";

const ControllerName = "tickets";

function GetTickets(args: GetTicketsViewModel.Request) {
  return Post<GetTicketsViewModel.Response>(
    ControllerName + "/?" + new URLSearchParams(args as any).toString(),
    undefined,
    "GET"
  );
}

function GetTicketMessages(args: GetTicketMessagesViewModel.Request) {
  return Post<GetTicketMessagesViewModel.Response>(
    ControllerName + `/${args.id}/`,
    undefined,
    "GET"
  );
}

const Actions = {
  GetTickets,
  GetTicketMessages,
};

export default Actions;
