export class TheResponseData<T> {
  status: number;
  message: string;
  data: T;
  serverTime: number;
}
