import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDesc'
})
export class DateDescPipe implements PipeTransform {

  transform(value: Date | number | string, ...args: string[]): string {
    value = new Date(value)
    let past = value.getTime()
    let diff = Date.now() - past
    if (diff < 1000 * 60 * 60) return 'Just now'
    else if (diff < 1000 * 60 * 60 * 24 + 1000) return 'Today'
    else if (diff < 1000 * 60 * 60 * 24 * 7 + 1000) return 'At this week'
    else return '' + value
  }

}
