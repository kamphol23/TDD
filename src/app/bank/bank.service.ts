import { Injectable } from '@angular/core';

import {Account} from '../account';
@Injectable({
	providedIn: 'root'
})
export class BankService {

  customerAccount: Account = {
    customerName: 'Kamphol Taeng-iam',
    balance: 200,
  }

	getBalance(account: Account): number{
		if (account.customerName === '' || typeof account.customerName !== 'string' || account.customerName === null || account.customerName !== account.customerName.trim()) {
			throw new Error('username is invalid')
		}
		if (typeof account.balance !== 'number' || account.balance < 0  ) {
			throw new Error('Balance is invalid')
		}
		return account.balance

	};

	deposit(account: Account, amount: number): void {
		if (typeof account.customerName !== 'string' || account.customerName ===  '' || account.customerName === null || account.customerName !== account.customerName.trim()) {
			throw new Error('invalid username')
		}
		if (amount === 0 || amount < 0 || typeof amount !== 'number') {
			throw new Error('deposit is to low or invalid')
		}else {
      account.balance += amount;
    }
	};

	withdraw(account: Account, amount: number): void{
		if(typeof account.customerName !== 'string' || account.customerName === '' || account.customerName === null || account.customerName !== account.customerName.trim() ){
			throw new Error('username is invalid')
		}
		if(typeof amount !== 'number'|| amount === 0 || amount < 0 || amount >= account.balance){
			throw new Error('invlanid input')
		}else {
      account.balance -= amount;
    }

	};



	constructor() { }
}
