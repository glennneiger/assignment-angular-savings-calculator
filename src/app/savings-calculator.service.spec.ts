import { TestBed, inject } from '@angular/core/testing';

import { SavingsCalculatorService } from './savings-calculator.service';

describe('SavingsCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SavingsCalculatorService]
    });
  });

  it('should be created', inject([SavingsCalculatorService], (service: SavingsCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
