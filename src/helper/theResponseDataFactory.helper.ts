import { STATUS_CODE } from '@constants/index';
import { TheResponseData } from '@core/dto';

export class TheResponseDataFactory<T> {
  private status = STATUS_CODE.SUCCESS;
  private message = 'common.SUCCESS';
  private data: T;

  withStatus(status: number): this {
    this.status = status;
    return this;
  }

  withMessage(message: string): this {
    this.message = message;
    return this;
  }

  withData(data: T): this {
    this.data = data;
    return this;
  }

  build(): TheResponseData<T> {
    const theResponseData = new TheResponseData<T>();
    theResponseData.status = this.status;
    theResponseData.message = this.message;
    theResponseData.data = this.data;
    theResponseData.serverTime = Date.now();

    return theResponseData;
  }
}
