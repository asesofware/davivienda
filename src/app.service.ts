import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const metodosPago = {
      "code": "SUCCESS",
      "error": null,
      "paymentMethods": [
          {
              "id": "36",
              "description": "EFECTY",
              "country": "CO",
              "enabled": true,
              "reason": null
          },
          {
              "id": "10",
              "description": "MASTERCARD",
              "country": "co",
              "enabled": true,
              "reason": null
          },
          {
              "id": "15",
              "description": "VISA",
              "country": "co",
              "enabled": true,
              "reason": null
          }
      ]
  }
    return metodosPago;
  }
}
