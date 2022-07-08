import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact-service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(
    private contactService: ContactService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  contact!: Contact

  async ngOnInit(){
    this.route.data.subscribe(async ({contact}) => {
      this.contact = contact || this.contactService.getEmptyContact() as Contact
    })
  }

  async onSaveContact() {
    await lastValueFrom(this.contactService.save(this.contact))
    this.router.navigateByUrl('/contact')
  }

}
