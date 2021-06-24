import {message} from 'antd';
import BaseResponse from './Common/BaseResponse';

const BaseUrl = 'https://api.ticksy.markop.ir/';

export function Post<T extends BaseResponse>(
  url: string,
  data: any,
  method = 'POST',
  showLog = !process.env.JEST_WORKER_ID,
  showNotifier = false
) {
  return new Promise<T>((resolve, reject) => {
    if (showLog) {
      console.log(BaseUrl + url + ':  Request  : ' + JSON.stringify(data));
    }

    const headers: Record<string, string> = {};

    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Token ${token}`;
    }
    if (Object.getPrototypeOf(data ?? {}) !== FormData.prototype) {
      data = JSON.stringify(data);
      headers['Content-Type'] = 'application/json';
    }

    fetch(BaseUrl + url, {
      method: method,
      headers: headers,
      body: data,
    })
      .then(async (response) => {
        if (showLog) {
          console.debug('='.repeat(50));
          console.log(url, 'Response:', response);

          console.debug('='.repeat(50));
        }
        if (response.status === 401) {
          reject(response);
          localStorage.removeItem('token');
          message.error('برای دسترسی به این عملیات وارد حساب خود بشوید');
        } else if (response.status === 200 || response.status === 201) {
          resolve((await response.json()) as T);
        } else {
          if (showNotifier) {
            message.error('انجام این عملیات ممکن نیست', 5);
          }
          reject(response);
        }
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
export function Delete<T extends BaseResponse>(
  url: string,
  showLog = !process.env.JEST_WORKER_ID,
  showNotifier = false
) {
  return new Promise<T>((resolve, reject) => {
    const headers: Record<string, string> = {};

    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Token ${token}`;
    }

    fetch(BaseUrl + url, {
      method: 'DELETE',
      headers: headers,
    })
      .then(async (response) => {
        if (showLog) {
          console.debug('='.repeat(50));
          console.log(url, 'Response:', response);

          console.debug('='.repeat(50));
        }
        if (response.status === 401) {
          reject(response);
          localStorage.removeItem('token');
          message.error('برای دسترسی به این عملیات وارد حساب خود بشوید');
        } else if (response.status === 204) {
          resolve({} as any);
        } else {
          if (showNotifier) {
            message.error('انجام این عملیات ممکن نیست', 5);
          }
          reject(response);
        }
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
export function Get<T extends BaseResponse>(
  url: string,
  data: any,
  showLog = !process.env.JEST_WORKER_ID,
  showNotifier = false
) {
  return new Promise<T>((resolve, reject) => {
    if (showLog) {
      console.log(BaseUrl + url + ':  Request  : ' + JSON.stringify(data));
    }

    const headers: Record<string, string> = {};

    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Token ${token}`;
    }

    const params = new URLSearchParams(data);
    params.forEach((v: any, k: any) => {
      if (v === 'undefined') {
        params.delete(k);
      }
    });

    fetch(BaseUrl + url + '?' + params, {
      method: 'GET',
      headers: headers,
    })
      .then(async (response) => {
        if (showLog) {
          console.debug('='.repeat(50));
          console.log(url, 'Response:', response);

          console.debug('='.repeat(50));
        }
        if (response.status === 401) {
          reject(response);
          localStorage.removeItem('token');
          message.error('برای دسترسی به این عملیات وارد حساب خود بشوید');
        } else if (response.status === 200 || response.status === 201) {
          resolve((await response.json()) as T);
        } else {
          if (showNotifier) {
            message.error('انجام این عملیات ممکن نیست', 5);
          }
          reject(response);
        }
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
