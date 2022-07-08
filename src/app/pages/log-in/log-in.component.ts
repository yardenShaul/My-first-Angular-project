import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCredentials } from 'src/app/models/user-credentials';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(
    private authService: AuthServiceService,
    private route: ActivatedRoute,
    private router: Router
    ) { }
  credentials: UserCredentials = {userName: '', password: ''} as UserCredentials
    
  onSubmitCredentials() {
    const loginStatus = this.authService.onLogIn(this.credentials)
    console.log(loginStatus)
    if (loginStatus) this.router.navigateByUrl('/')
    else alert('Invalid credentials! Please try again')
  }

  ngOnInit(): void {
  }

}
