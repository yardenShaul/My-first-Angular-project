import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { AboutComponent } from './pages/about/about.component';
import { CoinsAppComponent } from './pages/coins-app/coins-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  // {path: 'contact/:_id', component: ContactDetailsComponent, resolve: ContactResolverService},
  {
    path: 'contact/:_id', 
    component: ContactDetailsComponent, 
    resolve: { contact: ContactResolverService },
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'about', 
    component: AboutComponent
  },
  {
    path: 'statistics', 
    component: StatisticsComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact', component: CoinsAppComponent, 
    children: [
    {
    path: 'contact/edit/:_id', 
    component: ContactEditComponent, 
    resolve: { contact: ContactResolverService },
    canActivate: [AuthGuardGuard]
    },
    {
      path: 'contact/edit', component: ContactEditComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
