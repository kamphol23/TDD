import { Component, OnInit } from '@angular/core';
import {BankService } from './bank.service';
import { FormsModule } from '@angular/forms';
import {Account} from '../account';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
      service: BankService;
  constructor(service: BankService) { this.service = service }

   customerAccount: Account = {
     customerName: 'Kamphol Taeng-iam',
     balance: 200,
   }

account: Account;
balance: number = null;
inputValue:string = "";


  ngOnInit() {
     this.account = this.service.customerAccount;
  }

  showBalance(account: Account):number {
      return this.balance = this.service.getBalance(account)
    }

  depositMoney(account: Account, amount: number):void {
       let mountOfInput = Number(this.inputValue);
     this.service.deposit(account, mountOfInput)


   }

  	withdraw(account: Account, amount: number): void{
     let mountOfInput = Number(this.inputValue);
      this.service.withdraw(account, mountOfInput);


    }
}
