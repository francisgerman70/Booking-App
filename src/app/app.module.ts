import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DpDatePickerModule } from 'ng2-date-picker';
import { IgxTimePickerModule } from 'igniteui-angular';
import { HammerModule } from '@angular/platform-browser';


// @ts-ignore

import { NgxTimeDurationPickerModule } from 'ngx-time-duration-picker';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    NgxTimeDurationPickerModule,
    NgxTimeDurationPickerModule,
    DpDatePickerModule,
    IgxTimePickerModule,
    HammerModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
