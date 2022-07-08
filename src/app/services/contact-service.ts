import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ContactFilter } from '../models/contact-filter';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  private _contactsDB: Contact[] = [
    {_id: '3473-18181F7940E-3485', name: 'Sara Brown', email: 'sara31@yaboo.com', phone: '+4 (56) 634-4851', createdAt: new Date('2022-06-27')},
    {_id: '3216-18181F7940E-4740', name: 'Bob Jason', email: 'bob75@yaboo.com', phone: '+6 (17) 398-7645', createdAt: new Date('2022-06-22')},
    {_id: '3446-18181F7940E-3587', name: 'Gidi Dov', email: 'gidi24@yaboo.com', phone: '+4 (75) 555-9379', createdAt: new Date('2022-05-10')},
    {_id: '2875-18181F7940E-9876', name: 'Dave Shrut', email: 'dave24@yaboo.com', phone: '+1 (28) 733-2932', createdAt: new Date('2021-12-20')},
    {_id: '7966-18181F7940E-9267', name: 'Ben Jery', email: 'ben15@yaboo.com', phone: '+7 (52) 666-5963', createdAt: new Date('2021-11-18')},
    {_id: '6444-1ASFJB7940E-8534', name: 'Noam Davidson', email: 'noam85@yaboo.com', phone: '+7 (86) 275-8741', createdAt: new Date('2020-11-12')},
    {_id: '6400-18SADF7940E-9877', name: 'Puki Ben David', email: 'puki77@yaboo.com', phone: '+7 (33) 987-9891', createdAt: new Date('2020-11-12')},
    {_id: '6465-18REASFV40E-8522', name: 'Ester Martin', email: 'ester11@yaboo.com', phone: '+7 (11) 375-9741', createdAt: new Date('2020-11-12')},
  ]

  private _contacts$ = new BehaviorSubject<Contact[]>([]);
  public contacts$ = this._contacts$.asObservable()

  private _filterBy$ = new BehaviorSubject<ContactFilter>({keywords: ''})
  public filterBy$ = this._filterBy$.asObservable()

  public query() {
    const filterBy = this._filterBy$.value
    const contacts = this._contactsDB.filter(({ name }) => {
      return name.toLowerCase().includes(filterBy.keywords.toLowerCase())
    })
    this._contacts$.next(contacts)
  }

  public getById(contactId: string): Observable<Contact> {
    const contact = this._contactsDB.find(contact => contact._id === contactId) as Contact
    return of({...contact})
  }

  public getEmptyContact() {
    return {
      name: '',
      email: '',
      phone: ''
    }
  }

  public remove(contactId: string) {
    const contacts = this._contactsDB
    const contactIdx = contacts.findIndex(contact => contact._id === contactId)
    this._contactsDB.splice(contactIdx, 1)
    this._contacts$.next(contacts)
    return of({})
  }

  public setFilter(filterBy: ContactFilter) {
    this._filterBy$.next(filterBy)
    this.query()
  } 

  public save(contact: Contact) {
    return contact._id ? this._edit(contact) :this._add(contact)
  }

  private _add(contact: Contact) {
    contact._id = this._makeId()
    this._contactsDB.push(contact)
    this._contacts$.next([...this._contactsDB])
    return of(contact)
  }

  private _edit(contact: Contact) {
    const contacts = this._contactsDB
    const contactIdx = contacts.findIndex(_contact => _contact._id === contact._id)
    contacts.splice(contactIdx,1,contact)
    this._contacts$.next([...this._contactsDB])
    return of(contact)
  }

  private _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }




}
