import { IDatabaseService } from '@core/abstract';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MongodbService implements IDatabaseService {}
