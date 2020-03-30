import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-datepicker';
  public firstDate = moment();
  public secondDate = moment();
  public thirdDate = moment();
  public fourthDate = moment();
  public fifthDate = moment();

  public sixthDate = moment();

  public minDate = moment().subtract(1, 'months');
}
