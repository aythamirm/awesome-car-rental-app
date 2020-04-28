import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getImageUrl'
})
export class GetImageUrlPipe implements PipeTransform {

  transform(imageName: unknown, ...args: unknown[]): unknown {
    return `http://rentals-api.webtraining.fun/images/vehicles/${imageName}`;
  }

}
