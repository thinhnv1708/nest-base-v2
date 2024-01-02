import { ILoggerService } from '@abstract/logger.abstract';
import { IAppConfig, IKafkaConfig } from '@configuration/interfaces';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { I18nService } from 'nestjs-i18n';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const loggerService = app.get(ILoggerService);
  const appConfig = configService.get<IAppConfig>('APP');
  const kafkaConfig = configService.get<IKafkaConfig>('KAFKA');
  const { PORT, GRPC_PORT } = appConfig;
  const { BROKERS } = kafkaConfig;

  const i18nService: I18nService = app.get(I18nService);

  const reflector: Reflector = app.get(Reflector);

  // app.useGlobalInterceptors(
  //   new LogRequestResponseInterceptor(loggerService, configService, reflector),
  //   new SuccessResponseDataInterceptor(i18nService),
  // );

  // const httpAdapterHost = app.get(HttpAdapterHost);

  // app.useGlobalFilters(
  //   new UncatchedExceptionsFilter(
  //     httpAdapterHost,
  //     configService,
  //     loggerService,
  //     i18nService,
  //   ),
  //   new CustomHttpExceptionFilter(
  //     httpAdapterHost,
  //     configService,
  //     loggerService,
  //     i18nService,
  //   ),
  // );

  // Grpc
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.GRPC,
  //   options: {
  //     url: `0.0.0.0:${GRPC_PORT}`,
  //     package: TEST_PACKAGE_NAME,
  //     protoPath: 'protos/test.proto',
  //   },
  // });

  // Kafka
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       brokers: BROKERS,
  //     },
  //     consumer: {
  //       groupId: 'KAFKA_GROUP_ID', //Thường là tên service luôn
  //     },
  //   },
  // });

  // await app.startAllMicroservices();
  await app.listen(PORT, () => {
    loggerService.log(
      `Server running on grpc port ${GRPC_PORT}`,
      'Bootstrap',
      loggerService.DEBUG_LEVEL.FORCE,
    );
    loggerService.log(
      `Server running on port ${PORT}`,
      'Bootstrap',
      loggerService.DEBUG_LEVEL.FORCE,
    );
  });
}

bootstrap();
