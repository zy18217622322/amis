import http, { Response } from '@/utils/http';

export interface LoginParams {
  username: string;
  password: string;
}

interface UserInfo {
  id: number;
  username: string;
  mobile: number;
  email: string;
}

export default {
  // async login(params: LoginParams) {
  //   return await http.post<Response<UserInfo>>('/user/login', params);
  // },
  async login() {
    return await http.get<Response<any>>('/mdoa/testapi/helloworld');
  },
  async getList(id: string) {
    return await http.get<Response<any>>(`/mdoa/testapi/helloWorldWithArgs?id=${id}`);
  },
};
