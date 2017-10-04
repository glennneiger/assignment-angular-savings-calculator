import { Component } from '@angular/core';
import { SavingsCalculatorService } from './savings-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Savings Rate Calculator';
  amount;
  rate;
  years;
  savingsRows = [];

  constructor(private savingsCalculatorService: SavingsCalculatorService) {}

  calculate() {
    this.savingsRows = this.savingsCalculatorService.getSavingsRowList(
      this.amount,
      this.rate,
      this.years);

    console.log(this.savingsRows);
  }

  reset() {
    this.savingsRows = [];
    this.amount = null;
    this.rate = null;
    this.years = null;
  }
}
