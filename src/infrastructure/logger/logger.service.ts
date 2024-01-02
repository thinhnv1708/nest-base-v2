import {
  ILoggerService,
  DEBUG_LEVEL,
  DebugLevel,
} from '@abstract/logger.abstract';
import { ILoggerConfig } from '@configuration/interfaces';
import { ConsoleLogger, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LoggerService implements ILoggerService {
  private logger: ConsoleLogger;

  private config: ILoggerConfig;

  public DEBUG_LEVEL: DebugLevel;

  constructor(configService: ConfigService) {
    this.config = configService.get<ILoggerConfig>('LOG');

    this.DEBUG_LEVEL = DEBUG_LEVEL;

    this.logger = new ConsoleLogger();
  }

  checkDebugMode(callback: () => void, level: number) {
    if (this.config.DEBUG_MODE >= level) {
      return callback();
    }

    return undefined;
  }

  error(
    message: string,
    context = '',
    level: number = DEBUG_LEVEL.FORCE,
  ): void {
    return this.checkDebugMode(
      () => this.logger.error(message, '', context),
      level,
    );
  }

  warn(message: string, context = '', level: number = DEBUG_LEVEL.TINY): void {
    return this.checkDebugMode(() => this.logger.warn(message, context), level);
  }

  log(message: string, context = '', level: number = DEBUG_LEVEL.BASIC): void {
    return this.checkDebugMode(() => this.logger.log(message, context), level);
  }

  debug(message: string, context = '', level: number): void {
    return this.checkDebugMode(
      () => this.logger.debug(message, context),
      level,
    );
  }

  verbose(message: string, context = '', level: number): void {
    return this.checkDebugMode(
      () => this.logger.verbose(message, context),
      level,
    );
  }
}
