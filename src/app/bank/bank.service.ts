import { Injectable } from '@angular/core';
import {BankComponent} from './bank.component';
import {Account} from '../account';
@Injectable({
	providedIn: 'root'
})
export class BankService {

  customerAccount: Account = {
    customerName: 'Kamphol Taeng-iam',
    balance: 200,
  }

	getBalance(account: Account):number{
		if (account.customerName === '' || typeof account.customerName !== 'string' || account.customerName === null) {
			throw new Error('username is invalid')
		}
		if (typeof account.balance !== 'number' || account.balance < 0) {
			throw new Error('Balance is invalid')
		}
		return account.balance
	};

	deposit(account: Account, amount: number): void {
		if (typeof account.customerName !== 'string' || account.customerName ===  '' || account.customerName === null) {
			throw new Error('invalid username')
		}
		if (amount === 0 || amount < 0 || typeof amount !== 'number') {
			throw new Error('deposit is to low or invalid')
		}else {
      account.balance += amount;
    }
	};

	withdraw(account: Account, amount: number): void{
		if(typeof account.customerName !== 'string' || account.customerName === '' || account.customerName === null ){
			throw new Error('username is invalid')
		}
		if(typeof amount !== 'number'|| amount === 0 || amount < 0 || amount >= account.balance){
			throw new Error('invlanid input')
		}else {
      account.balance -= amount;
    }

	};

	transfer(from: Account, to: Account, amount: number): void{
		if(typeof from.customerName !== 'string' || from.customerName === ''){
			throw new Error('The username from the account that watn transfer from is invalid');
		}
		if(typeof to.customerName !== 'string'){
			throw new Error('the username of the receiving account is invalid ');
		}
	};

	constructor() { }
}
