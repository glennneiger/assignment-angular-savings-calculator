import { Injectable } from '@angular/core';
import { SavingsRow } from './savings-row';
const NUM_MONTHS_YEAR = 12;

@Injectable()
export class SavingsCalculatorService {
  constructor() { }

  getSavingsRowList(amount: number, rate: number, years: number): SavingsRow[] {
    let savingsRows: SavingsRow[];
    let balance = amount;

    savingsRows = [];

    for (let i = 0; i < years * NUM_MONTHS_YEAR; i++) {
      let month;
      let interest;
      let savingsRow: SavingsRow;

      month = i + 1;
      interest = balance * ((rate / 100) / 12);
      balance += interest;

      savingsRow = new SavingsRow(month, interest, balance);       savingsRows.push(savingsRow);
    }

    return savingsRows;
  }
}
