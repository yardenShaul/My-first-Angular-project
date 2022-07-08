import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { CoinsAppComponent } from './pages/coins-app/coins-app.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { FormsModule } from '@angular/forms';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './cmps/header/header.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { DateDescPipe } from './pipes/date-desc.pipe';
import { FilterArrPipe } from './pipes/filter-arr.pipe';
import { NaturalTypePipe } from './pipes/natural-type.pipe';
import { LogInComponent } from './pages/log-in/log-in.component';
import { HomeComponent } from './pages/home/home.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { FetchDataPipe } from './pipes/fetch-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoinsAppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    ContactDetailsComponent,
    AboutComponent,
    HeaderComponent,
    ContactEditComponent,
    DateDescPipe,
    FilterArrPipe,
    NaturalTypePipe,
    LogInComponent,
    HomeComponent,
    StatisticsComponent,
    FetchDataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
