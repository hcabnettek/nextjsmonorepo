/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-debugger */
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import data from './data.json';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const urls = {
  development: 'http://localhost:4200/',
  production: 'https://myaccount.socalgas.com/',
};

const controller = new AbortController();
type SCGRequest = {
  baseUrl: string;
  headers: {
    Accept: string;
    'Content-Type': string;
  };
  signal: AbortController;
};
const conf: AxiosRequestConfig<SCGRequest> = {
  baseURL: 'http://localhost:4200/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  signal: controller.signal,
};
const api = Axios.create(conf);

api.interceptors.request.use(
  (request: typeof conf) => {
    if (request.url?.includes('auth/login')) {
      request.method = 'get';
      request.url = 'https://jsonplaceholder.typicode.com/users/5';
      //controller.abort();
    }

    if (request.url?.includes('billAcounts')) {
      debugger;
      request.method = 'get';
      request.url = 'https://jsonplaceholder.typicode.com/users/6';
      //controller.abort();
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse<any, AxiosRequestConfig<typeof conf>>) => {
    response.status = 200;
    response.statusText = 'OK';
    console.log('response.config.url', response.config.url);
    //if (response.config.url!.includes('users/6')) {
    response.data = data;
    //}

    debugger;

    return response;
  },
  (error) => {
    debugger;
    return Promise.reject(error);
  }
);

/*
api.interceptors.response.use(
  (response: AxiosResponse<any, AxiosRequestConfig<typeof conf>>) => {
    response.status = 200;
    response.statusText = 'OK';
    if (response.config.url?.includes('users/5')) {
      debugger;
      response.data = {
        token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImNocmlzdG9waGVya0Bsb2dpYzIwMjAuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.oPO0N9W4ig6t0o1vsc5mzoUnnoqtL-bxdRaMUcCTdSU`,
      };
    }

    return response;
  },
  (error) => {
    debugger;
    return Promise.reject(error);
  }
); */

export { api };
