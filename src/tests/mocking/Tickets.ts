import {error, noError} from '.';
import Tickets from '../../app/API/Domains/Tickets';
import CreateTicketMessageViewModel from '../../app/API/ViewModels/Tickets/CreateTicketMessageViewModel';
import GetTicketViewModel from '../../app/API/ViewModels/Tickets/GetTicketViewModel';
import GetTicketsViewModel from '../../app/API/ViewModels/Tickets/GetTicketsViewModel';
import CreateTicketViewModel from '../../app/API/ViewModels/Tickets/CreateTicketViewModel';
import ForwardTicketSectionViewModel from '../../app/API/ViewModels/Tickets/ForwardTicketSectionViewModel';

export function mockTickets() {
  mockGetTicket();
  mockGetTickets();
  mockCreateTicket();
  mockCreateTicketMessage();
  mockForwardTicketSection();
}

function mockCreateTicketMessage() {
  jest.spyOn(Tickets, 'CreateTicketMessage');
  const mocked = Tickets.CreateTicketMessage as jest.MockedFunction<
    typeof Tickets.CreateTicketMessage
  >;
  mocked.mockImplementation(({id, text, attachments}) => {
    if (text !== 'error')
      return noError<CreateTicketMessageViewModel.Response>({});
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
      if (title != 'error')
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
      return error(400);
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
        other_sections: [
          {
            id: 0,
            title: 'Title',
            description: 'Description',
            get_open_ticket_count: 0,
            avatar: '',
            admin_detail: {
              id: 0,
              title: 'Title',
            },
            get_last_ticket_date: new Date(),
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
          title: 'Ticket Title 155',
          status: '1',
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
        {
          id: 0,
          text: 'Text',
          title: 'Title',
          status: '2',
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
        {
          id: 0,
          text: 'Text',
          title: 'Title',
          status: '3',
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
        {
          id: 0,
          text: 'Text',
          title: 'Title',
          status: '4',
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

function mockForwardTicketSection() {
  jest.spyOn(Tickets, 'ForwardTicketSection');
  const mocked = Tickets.ForwardTicketSection as jest.MockedFunction<
    typeof Tickets.ForwardTicketSection
  >;
  mocked.mockImplementation(({section, ticketId}) => {
    if (section >= 0)
      return noError<ForwardTicketSectionViewModel.Response>({} as any);
    return error(400);
  });
}
