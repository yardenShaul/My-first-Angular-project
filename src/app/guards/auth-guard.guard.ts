import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    const isLoggedIn = await this.authService.checkLoggedIn()
    if (!isLoggedIn) this.router.navigateByUrl('/login')
    return isLoggedIn
  }
  
}
