import { Observable } from 'rxjs';
import { Injectable } from '@nestjs/common';

import { ApiService } from '@monorepo/api';

@Injectable()
export class SwapiService {
  constructor(private readonly apiService: ApiService) {}

  getHello(): Observable<string> {
    return this.apiService.helloWorld();
  }
}
