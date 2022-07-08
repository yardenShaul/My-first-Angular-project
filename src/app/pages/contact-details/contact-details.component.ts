import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact-service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailsComponent implements OnInit {

  constructor(
    private contactService: ContactService, 
    private route: ActivatedRoute, 
    private router: Router,
    private cd: ChangeDetectorRef
    ) { }
  @Input() contactId!: string
  contact!: Contact
  txt = ''

  async ngOnInit() {
    // this.route.params.subscribe(async params => {
    //   console.log(params['_id'])
    //   this.contact = await lastValueFrom(this.contactService.getById(params['_id']))
    // })
    // setTimeout(() => {
    //   this.txt = 'Helloooo'
    //   this.cd.markForCheck()
    // },1500)

    this.route.data.subscribe(data => {
      this.contact = data['contact']
    })
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }

}
