import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BankComponent } from './bank.component';
import { BankService } from './bank.service';

describe('BankComponent', () => {
  let component: BankComponent;
  let fixture: ComponentFixture<BankComponent>;
  let domElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ BankComponent ],
			providers: [
				BankService
			]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankComponent);
    component = fixture.componentInstance;
    domElement = fixture.nativeElement;
    fixture.detectChanges();

  });


    describe('Component DOM', () => {

      it('should have an account ', () => {
        expect(component.customerAccount).toBeTruthy();
      });

      it('should show the balance in a CSS-class named accountbalance', () => {
        let expectedValue = component.customerAccount.balance;
        let actualValue = domElement.querySelector('.accountBalance');
        expect(expectedValue).toBeCloseTo(actualValue.innerHTML);
      });

      it('should have a inputfield were you can putt in a amout of value', () => {
        let input = domElement.querySelector('.amount');
        expect(input).toBeTruthy();
      });

    });

  describe('deposit and withdraw ', () => {

      it('should have a function for deposit', () => {
         expect(component.depositMoney).toBeTruthy();
      });

    it('should an function for withdraw', () => {
             expect(component.withdraw).toBeTruthy();
         });



       });

});
