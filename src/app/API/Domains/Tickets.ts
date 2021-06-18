import {Post} from '../fetch';
import GetTicketsViewModel from '../ViewModels/Tickets/GetTicketsViewModel';
import GetTicketDetailViewModel from '../ViewModels/Tickets/GetTicketViewModel';
import CreateTicketMessageViewModel from '../ViewModels/Tickets/CreateTicketMessageViewModel';

const ControllerName = 'tickets';

function GetTicket(args: GetTicketDetailViewModel.Request) {
  return Post<GetTicketDetailViewModel.Response>(
    ControllerName + `/${args.id}/`,
    undefined,
    'GET'
  );
}

function GetTickets(args: GetTicketsViewModel.Request) {
  return Post<GetTicketsViewModel.Response>(
    ControllerName + '/?' + new URLSearchParams(args as any).toString(),
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

const Actions = {
  GetTicket,
  GetTickets,
  CreateTicketMessage,
};

export default Actions;
