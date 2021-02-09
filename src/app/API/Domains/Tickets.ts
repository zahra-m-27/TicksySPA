import { Post } from "../fetch";
import GetTicketsViewModel from "../ViewModels/Tickets/GetTicketsViewModel";

const ControllerName = "tickets";

function GetTickets(args: GetTicketsViewModel.Request) {
  return Post<GetTicketsViewModel.Response>(
    ControllerName + "/?" + new URLSearchParams(args as any).toString(),
    undefined,
    "GET"
  );
}

const Actions = {
  GetTickets,
};

export default Actions;
