import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArr'
})
export class FilterArrPipe implements PipeTransform {

  transform<T>(items:T[], filterBy: string, keywords: string): T[] {
    const regExp = new RegExp(keywords, 'i')
    return items.filter(item => regExp.test((item as any)[filterBy]))
  }

}
