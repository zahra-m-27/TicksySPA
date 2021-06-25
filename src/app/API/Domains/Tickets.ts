import {Get, Post} from '../fetch';
import GetTicketsViewModel from '../ViewModels/Tickets/GetTicketsViewModel';
import GetTicketDetailViewModel from '../ViewModels/Tickets/GetTicketViewModel';
import CreateTicketViewModel from '../ViewModels/Tickets/CreateTicketViewModel';
import CreateTicketMessageViewModel from '../ViewModels/Tickets/CreateTicketMessageViewModel';
import UpdateMessageRateViewModel from '../ViewModels/Tickets/UpdateMessageRateViewModel';
import EditTicketViewModel from '../ViewModels/Tickets/EditTicketViewModel';
import ForwardTicketSectionViewModel from '../ViewModels/Tickets/ForwardTicketSectionViewModel';

const ControllerName = 'ticket';

function GetTicket(args: GetTicketDetailViewModel.Request) {
  return Get<GetTicketDetailViewModel.Response>(
    ControllerName + `/${args.id}/`,
    {}
  );
}

function GetTickets(args: GetTicketsViewModel.Request) {
  return Get<GetTicketsViewModel.Response>(ControllerName + '/', args);
}

function CreateTicketMessage(args: CreateTicketMessageViewModel.Request) {
  const formData = new FormData();
  formData.append('text', args.text);
  for (const attachment of args.attachments)
    formData.append('attachments', attachment);
  return Post<CreateTicketMessageViewModel.Response>(
    ControllerName + `/${args.id}/message/`,
    formData
  );
}

function CreateTicket(args: CreateTicketViewModel.Request) {
  const formData = new FormData();
  formData.append('tags', args.tags);
  formData.append('text', args.text);
  formData.append('title', args.title);
  formData.append('section', args.section.toString());
  for (const attachment of args.attachments)
    formData.append('attachments', attachment);
  formData.append('priority', `${args.priority}`);
  return Post<CreateTicketViewModel.Response>(
    ControllerName + `/`,
    formData,
    'POST'
  );
}

function UpdateMessageRate(args: UpdateMessageRateViewModel.Request) {
  return Post<UpdateMessageRateViewModel.Response>(
    `/messages/${args.messageId}/`,
    args
  );
}

function EditTicket(args: EditTicketViewModel.Request) {
  return Post<EditTicketViewModel.Response>(
    ControllerName + `/${args.ticketId}/`,
    args
  );
}

function ForwardTicketSection(args: ForwardTicketSectionViewModel.Request) {
  const {ticketId, ...data} = args;
  return Post<ForwardTicketSectionViewModel.Response>(
    ControllerName + `/${ticketId}/`,
    data,
    'PATCH'
  );
}

const Actions = {
  GetTicket,
  GetTickets,
  EditTicket,
  CreateTicket,
  UpdateMessageRate,
  CreateTicketMessage,
  ForwardTicketSection,
};

export default Actions;
