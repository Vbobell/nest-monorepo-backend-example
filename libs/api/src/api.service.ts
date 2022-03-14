import { of } from 'rxjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  helloWorld() {
    return of('Hello World');
  }
}
