import {mockEmail} from './Email';
import {mockUsers} from './Users';
import BaseResponse from '../../app/API/Common/BaseResponse';
import {mockGetRecommendedTopics} from './GetRecommendedTopics';

export function noError<T extends BaseResponse>(response: T = {} as T) {
  return Promise.resolve({...response});
}

export function error(status: number) {
  return Promise.reject({status} as any);
}

export default function mockAllAPI() {
  mockEmail();
  mockUsers();
  mockGetRecommendedTopics();
}
