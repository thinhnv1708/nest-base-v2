import { ILoggerConfig } from '../interfaces';

export default (): { LOG: ILoggerConfig } => ({
  LOG: {
    DEBUG_MODE: Number(process.env.DEBUG_MODE) ?? 0,
    TRUNCATE: {
      REQUEST: Number(process.env.LOG_TRUNCATE_REQUEST_LENGTH) ?? 600,

      RESPONSE: Number(process.env.LOG_TRUNCATE_RESPONSE_LENGTH) ?? 600,

      DEBUG: Number(process.env.LOG_TRUNCATE_DEBUG_LENGTH) ?? 1000,
    },
  },
});
