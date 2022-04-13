import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { CountryService } from './service/country.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MdbCheckboxModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
