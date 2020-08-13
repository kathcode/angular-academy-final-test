export interface IUserResponse {
  data: IUser;
  status: 200;
}

export interface IUser {
  name: IUserName;
  gender: string;
  profession: string;
  knowFor: string;
}

export interface IUserName {
  first: string;
  last: string;
}
