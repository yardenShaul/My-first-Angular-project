import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactFilter } from 'src/app/models/contact-filter';
import { ContactService } from 'src/app/services/contact-service';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit, OnDestroy {

  constructor(private contactService: ContactService) { }
  filterBy!: ContactFilter
  subsciption!: Subscription

  ngOnInit(): void {
    this.subsciption = this.contactService.filterBy$.subscribe(filterBy => {
      this.filterBy = filterBy
    })
  }

  onSetFilter() {
    this.contactService.setFilter(this.filterBy)
  }

  ngOnDestroy(): void {
    this.subsciption.unsubscribe()
  }

}
