import { Observable } from 'rxjs';
import { Controller, Get } from '@nestjs/common';
import { SwapiService } from './swapi.service';

@Controller()
export class SwapiController {
  constructor(private readonly swapiService: SwapiService) {}

  @Get()
  getHello(): Observable<string> {
    return this.swapiService.getHello();
  }
}
