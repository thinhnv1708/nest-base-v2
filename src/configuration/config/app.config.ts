import { IAppConfig } from '../interfaces';

export default (): {
  APP: IAppConfig;
} => ({
  APP: {
    SERVICE_TAG: process.env.SERVICE_TAG || 'nestjs-base',
    PORT: Number(process.env.PORT) ?? 3000,
    GRPC_PORT: Number(process.env.GRPC_PORT) ?? 50000,
  },
});
