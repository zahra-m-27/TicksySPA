import {mockUsers} from './Users';
import {mockTickets} from './Tickets';
import BaseResponse from '../../app/API/Common/BaseResponse';
import {mockTopics} from './Topics';

export function noError<T extends BaseResponse>(response: T = {} as T) {
  return Promise.resolve({...response});
}

export function error(status: number, data?: any) {
  return Promise.reject({status, ...data} as any);
}

export default function mockAllAPI() {
  mockUsers();
  mockTopics();
  mockTickets();
}
