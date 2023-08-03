import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { info: string, status: number } {
    return { 'info':'ok',status:200 };
  }
}
