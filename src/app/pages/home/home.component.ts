import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCredentials } from 'src/app/models/user-credentials';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService : AuthServiceService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
  user!: UserCredentials
  bitcoinPriceUrle: string = `https://blockchain.info/tobtc?currency=USD&value=100`

  ngOnInit(): void {
    this.user = this.authService.getUser()
    this.bitcoinPriceUrle = `https://blockchain.info/tobtc?currency=USD&value=${this.user.coins}`
  }

  onLogin() {
    this.router.navigateByUrl('/login')
  }

}
