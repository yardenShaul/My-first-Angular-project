import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { AuthServiceService } from './auth-service.service';
import { ContactService } from './contact-service';

@Injectable({
  providedIn: 'root'
})
export class CoinServiceService {

  constructor(
    private contactService: ContactService,
    private authService: AuthServiceService
    ) { }
  
  async transferMoney(amount: number, recipientContact: Contact) {
    const currUser = this.authService.getUser()
    if (currUser.coins >= amount) {
      const updatedContact = {...recipientContact, coins: recipientContact.coins + amount}
      this.contactService.save(updatedContact)
      this.authService.updateUser(amount)
    }
  }
}
