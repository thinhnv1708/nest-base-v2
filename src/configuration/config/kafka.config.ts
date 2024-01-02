import { IKafkaConfig } from '../interfaces';

export default (): { KAFKA: IKafkaConfig } => ({
  KAFKA: {
    BROKERS: process.env.KAFKA_BROKERS
      ? process.env.KAFKA_BROKERS.split(' ')
      : ['localhost:9092'],
    CLIENT_ID: process.env.CLIENT_ID || 'nestjsBase',
  },
});
