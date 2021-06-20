import {error, noError} from '.';
import Tickets from '../../app/API/Domains/Tickets';
import CreateTicketMessageViewModel from '../../app/API/ViewModels/Tickets/CreateTicketMessageViewModel';
import GetTicketViewModel from '../../app/API/ViewModels/Tickets/GetTicketViewModel';
import GetTicketsViewModel from '../../app/API/ViewModels/Tickets/GetTicketsViewModel';
import CreateTicketViewModel from '../../app/API/ViewModels/Tickets/CreateTicketViewModel';

export function mockTickets() {
  mockGetTicket();
  mockGetTickets();
  mockCreateTicket();
  mockCreateTicketMessage();
}

function mockCreateTicketMessage() {
  jest.spyOn(Tickets, 'CreateTicketMessage');
  const mocked = Tickets.CreateTicketMessage as jest.MockedFunction<
    typeof Tickets.CreateTicketMessage
  >;
  mocked.mockImplementation(({id, text, attachments}) => {
    if (id === 0) return noError<CreateTicketMessageViewModel.Response>({});
    return error(400);
  });
}

function mockCreateTicket() {
  jest.spyOn(Tickets, 'CreateTicket');
  const mocked = Tickets.CreateTicket as jest.MockedFunction<
    typeof Tickets.CreateTicket
  >;
  mocked.mockImplementation(
    ({section, tags, title, priority, text, attachments}) => {
      return noError<CreateTicketViewModel.Response>({
        tags: tags,
        title: title,
        priority: priority,
        text: text,
        last_update: new Date(),
        creator: {
          id: 0,
          avatar: '',
          last_name: '',
          first_name: '',
          email: '',
        },
        id: 0,
        creation_date: new Date(),
        status: '',
      });
    }
  );
}

function mockGetTicket() {
  jest.spyOn(Tickets, 'GetTicket');
  const mocked = Tickets.GetTicket as jest.MockedFunction<
    typeof Tickets.GetTicket
  >;
  mocked.mockImplementation(({id}) => {
    if (id == 0) {
      return noError<GetTicketViewModel.Response>({
        id: id,
        title: 'Title',
        status: 'Status',
        creation_date: new Date(),
        creator: {
          id: 1,
          first_name: 'System',
          last_name: 'Admin',
          avatar: '',
          email: 'admin@ticksy.ir',
        },
        section: {
          id: 0,
          avatar: '',
          admin_detail: {
            id: 0,
            title: 'Role Title',
          },
          title: 'Title',
          description: 'Description',
          get_open_ticket_count: 0,
          get_last_ticket_date: new Date(),
        },
        last_update: new Date(),
        tags: 'Tags',
        priority: 0,
        message_set: [
          {
            id: id,
            text: 'Text',
            url: '',
            attachment_set: [],
            date: new Date(),
            rate: 1,
            user: {
              id: 1,
              first_name: 'System',
              last_name: 'Admin',
              avatar: '',
              email: 'admin@ticksy.ir',
            },
          },
        ],
        admins: [
          {
            id: 0,
            title: 'Admin',
          },
        ],
      });
    }
    return error(400);
  });
}

function mockGetTickets() {
  jest.spyOn(Tickets, 'GetTickets');
  const mocked = Tickets.GetTickets as jest.MockedFunction<
    typeof Tickets.GetTickets
  >;
  mocked.mockImplementation(({status, search}) => {
    return noError<GetTicketsViewModel.Response>({
      count: 1,
      results: [
        {
          id: 0,
          text: 'Text',
          title: 'Title',
          status: 'Status',
          creation_date: new Date(),
          creator: {
            id: 1,
            first_name: 'System',
            last_name: 'Admin',
            avatar: '',
            email: 'admin@ticksy.ir',
          },
          last_update: new Date(),
          tags: 'Tags',
          priority: 0,
        },
      ],
    });
  });
}
