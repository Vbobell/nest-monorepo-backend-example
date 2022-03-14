import { Module } from '@nestjs/common';

import { ApiModule } from '@monorepo/api';

import { SwapiController } from './swapi.controller';
import { SwapiService } from './swapi.service';

@Module({
  imports: [ApiModule],
  controllers: [SwapiController],
  providers: [SwapiService],
})
export class SwapiModule {}
