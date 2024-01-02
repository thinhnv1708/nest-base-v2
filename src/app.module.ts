import { Module } from '@nestjs/common';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
} from 'nestjs-i18n';
import * as path from 'path';
import { AppController } from './controller';
import { LoggerModule } from '@infrastructure/logger/logger.module';
import { ConfigurationModule } from '@configuration/configuration.module';

@Module({
  imports: [
    ConfigurationModule,
    I18nModule.forRoot({
      fallbackLanguage: 'vi',
      resolvers: [
        { use: HeaderResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
    }),
    LoggerModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
