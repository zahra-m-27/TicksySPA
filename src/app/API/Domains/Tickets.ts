import {Post} from '../fetch';
import GetTicketsViewModel from '../ViewModels/Tickets/GetTicketsViewModel';
import GetTicketDetailViewModel from '../ViewModels/Tickets/GetTicketDetailViewModel';
import GetTicketMessagesViewModel from '../ViewModels/Tickets/GetTicketMessagesViewModel';
import CreateTicketMessageViewModel from '../ViewModels/Tickets/CreateTicketMessageViewModel';

const ControllerName = 'tickets';

function GetTickets(args: GetTicketsViewModel.Request) {
  return Post<GetTicketsViewModel.Response>(
    ControllerName + '/?' + new URLSearchParams(args as any).toString(),
    undefined,
    'GET'
  );
}
function GetTicketDetail(args: GetTicketDetailViewModel.Request) {
  return Post<GetTicketDetailViewModel.Response>(
    ControllerName + `/${args.id}/get-detail/`,
    undefined,
    'GET'
  );
}

function CreateTicketMessage(args: CreateTicketMessageViewModel.Request) {
  const formData = new FormData();
  formData.append('text', args.text);
  for (const attachment of args.attachments)
    formData.append('attachments', attachment);
  return Post<CreateTicketMessageViewModel.Response>(
    ControllerName + `/${args.id}/`,
    formData
  );
}

function GetTicketMessages(args: GetTicketMessagesViewModel.Request) {
  return Post<GetTicketMessagesViewModel.Response[]>(
    ControllerName + `/${args.id}/`,
    undefined,
    'GET'
  );
}

const Actions = {
  GetTickets,
  GetTicketDetail,
  GetTicketMessages,
  CreateTicketMessage,
};

export default Actions;
