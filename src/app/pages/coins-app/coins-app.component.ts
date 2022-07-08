import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact-service';

@Component({
  selector: 'app-coins-app',
  templateUrl: './coins-app.component.html',
  styleUrls: ['./coins-app.component.scss']
})
export class CoinsAppComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  contacts!: Contact[]
  contacts$!: Observable<Contact[]>
  subsciption!: Subscription

  onRemoveContact(contactId: string) {
    this.contactService.remove(contactId)
  }

  ngOnInit(): void {
    this.contactService.query()
    this.contacts$ = this.contactService.contacts$
  }

  // ngOnDestroy(): void {
  //   this.subsciption.unsubscribe()
  // }

}
