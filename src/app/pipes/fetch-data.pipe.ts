import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'fetchData',
  pure: false
})
export class FetchDataPipe implements PipeTransform {

  constructor(
    private httpService: HttpClient
  ) {}

  fetchUrl!: string 
  fetchData: any
  subscription!: Subscription
  
  transform(url: string): any {
    if (url !== this.fetchUrl) {
      this.fetchData = null
      this.fetchUrl = url
      this.subscription = this.httpService.get(url).subscribe(data => {
        this.fetchData = data
      })
    }
    return this.fetchData;
  }

}
