import { Component } from '@angular/core';
import {DatePickerComponent} from 'ng2-date-picker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedDate: any;
  datePickerConfig: any;
  onValueChanged($event: any) {

  }
}
