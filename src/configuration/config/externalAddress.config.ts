import { IExternalAddress } from '../interfaces';

export default (): {
  EXTERNAL_ADDRESS: IExternalAddress;
} => ({
  EXTERNAL_ADDRESS: {
    SERVICE_NAME_GRPC_ADDRESS: process.env.SERVICE_NAME_GRPC_ADDRESS,
  },
});
