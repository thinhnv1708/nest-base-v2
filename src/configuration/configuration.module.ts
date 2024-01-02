import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import externalAddressConfig from './config/externalAddress.config';
import kafkaConfig from './config/kafka.config';
import loggerConfig from './config/logger.config';
import mongodbConfig from './config/mongodb.config';
import redisConfig from './config/redis.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
        loggerConfig,
        kafkaConfig,
        mongodbConfig,
        redisConfig,
        externalAddressConfig,
      ],
      envFilePath: ['.development.env'],
    }),
  ],
})
export class ConfigurationModule {}
