import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { UserCredentials } from 'src/app/models/user-credentials';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CoinServiceService } from 'src/app/services/coin-service.service';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent implements OnInit {

  constructor(
    private coinService: CoinServiceService,
    private userService: AuthServiceService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  amount!: number
  recipientContact!: Contact
  currUser!: UserCredentials

  async ngOnInit() {
    this.route.data.subscribe(async ({contact}) => {
      this.recipientContact = contact
    })
    this.currUser = this.userService.getUser()
  }

  async onTransferMoney() {
    await this.coinService.transferMoney(this.amount, this.recipientContact)
    this.router.navigateByUrl('/contact')
  }

}
