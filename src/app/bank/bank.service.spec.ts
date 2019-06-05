import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Account} from '../account';

import {BankComponent} from './bank.component'
import { BankService } from './bank.service';


describe('BankService', () => {
	let service: BankService;
	let component: BankComponent;

	beforeEach(() => {

		TestBed.configureTestingModule({});
		service = TestBed.get(BankService);

	});


	it('should be created', () => {
		expect(service).toBeTruthy();
	});





	describe('getBalance', () => {

		it('Should have an function getBalance', () =>{
			expect(service.getBalance).toBeTruthy();
		})

		it('should return the balance from the account if everything is valid',() =>{
			let account:Account  = {
				customerName: 'kamphol',
				balance: 100
			}
			let actual = service.getBalance(account);
			expect(actual).toBe(100)
		});

		it('should throw an error if balance is not a number ', () =>{
			let account:Account  = {
				customerName: 'kamphol',
				balance:'should not work'
			}
			let actual = () => service.getBalance(account);
			expect(actual).toThrow();
		});

		it('should throw an error if balance is below zero ', () =>{
			let account:Account  = {
				customerName: 'kamphol',
				balance:-1
			}
			let actual = () => service.getBalance(account);
			expect(actual).toThrow();
		});

		it('should throw an error if username is not a string', () =>{
			let account:Account  = {
				customerName:123,
				balance:100
			};
			let actual  = () =>  service.getBalance(account);
			expect(actual).toThrow();
		});
		it('should throw an error if username is a empty string', () =>{
			let account:Account  = {
				customerName:'',
				balance:100
			};
			let actual  = () =>  service.getBalance(account);
			expect(actual).toThrow();
		});


		it('should throw an error if username is null', () =>{
			let account:Account  = {
				customerName: null,
				balance:100
			}
			let actual = () => service.getBalance(account);
			expect(actual).toThrow();
		});
	});

	describe('Deposit', () => {
		it('Should have an function name diposit', () => {
			expect(service.deposit).toBeTruthy();
		});

		it('should throw an error if username is not a string', () => {
			let account:Account  = {
				customerName: 123,
				balance: 100
			};
			let actual = () => service.deposit(account, account);
			expect(actual).toThrow();
		});

		it('should throw an error if username is a empty string', () => {
			let account:Account  = {
				customerName: '',
				balance: 100
			};
			let actual = () => service.deposit(account, account);
			expect(actual).toThrow();
		});

		it('should throw an error if username is null', () =>{
			let account:Account  = {
				customerName: null,
				balance: 200
			}
			let actual = () => service.deposit(account, 100);

			expect(actual).toThrow();
		});

		it('should throw an error if deposit is equal to zero', () => {
			let account:Account  = {
				customerName: 'kamphol',
				balance: 100
			};
			let actual = () => service.deposit(account, 0);
			expect(actual).toThrow();
		});

		it('should throw an error if deposit is below zero', () => {
			let account:Account  = {
				customerName: 'kamphol',
				balance: -1
			};
			let actual = () => service.deposit(account, -1);
			expect(actual).toThrow();
		});

		it('should throw an error if amount is not a number', () => {
			let account:Account  = {
				customerName: 'kamphol',
				balance: 'should not work'
			};
			let actual = () => service.deposit(account, 'should not work');
			expect(actual).toThrow();
		});

		it('should add the selected amount', () => {
			let account:Account  = {
				customerName: 'kamphol',
				balance: 500
			};
			let amount = 100;
			let expectedBalance = account.balance + amount;
			let actual = service.deposit(account, amount);
			expect(account.balance).toBe(expectedBalance);
		});

	});

	describe('withdraw',() => {

		it('should have an function name withdraw', () => {
			expect(service.withdraw).toBeTruthy();
		});

		it('should throw an error if username is not a string', () => {
			let account:Account  = {
				customerName: 123,
				balance: 1200
			};
			let actual = () => service.withdraw(account, account);
			expect(actual).toThrow();
		});

		it('should throw an error if username is a empty string', () =>{
			let account:Account  = {
				customerName: '',
				balance: 1200
			};
			let actual = () => service.withdraw(account, 100);
			expect(actual).toThrow();
		});

		it('should throw an error if username is null', () =>{
			let account:Account  = {
				customerName: null,
				balance:500
			}
			let actual = () => service.getBalance(account, 100);
			expect(actual).toThrow();
		});

		it('should thorw an error if amount is not a numbet',() => {
			let account:Account  = {
				customerName: 'kamphol',
				balance: 'should not work'
			};
			let actual = () => service.withdraw(account, account.balance);
			expect(actual).toThrow();
		});

		it('should thorw an error if amount is equal to zero', () =>{
			let account:Account  = {
				customerName: 'kamphol',
				balance: 0
			};
			let actual = () => service.withdraw(account, account.balance);
			expect(actual).toThrow();
		});

		it('should thorw an error if amount is below zero', () =>{
			let account:Account  = {
				customerName: 'kamphol',
				balance: -1
			};
			let actual = () => service.withdraw(account, account.balance);
			expect(actual).toThrow();
		});

		it('should thorw an error if amount bigger then account balance', () =>{
			let account:Account  = {
				customerName: 'kamphol',
				balance: 15000
			};
			let actual = () => service.withdraw(account, 20000);
			expect(actual).toThrow();
		});

		it('should revome the selected amount', () => {
			let account:Account  = {
				customerName: 'kamphol',
				balance: 500
			};
			let amount = 100;
			let expectedBalance = account.balance + amount;
			let actual = service.deposit(account, amount);
			expect(account.balance).toBe(expectedBalance);
		});

	});

	// describe('transfer', () => {
	//
	// 	it('should have an function name transfer',() => {
	// 		expect(service.transfer).toBeTruthy();
	// 	});
	//
	// 	it('should thorw an error if userFrom username is not a string', () =>{
	// 		let accountFrom:Account  = {
	// 			customerName: 123,
	// 			balance: 500
	// 		};
	// 		let accountTo:Account  = {
	// 			customerName: 'Turk på burk',
	// 			balance: 500
	// 		};
	// 		let actual = () => service.transfer(accountFrom, accountTo, 200);
	// 		expect(actual).toThrow();
	// 	});
	//
	// 	it('should thorw an error if userFrom username is a empty string', () =>{
	// 		let accountFrom:Account  = {
	// 			customerName: '',
	// 			balance: 500
	// 		};
	// 		let accountTo:Account  = {
	// 			customerName: 'Turk på burk',
	// 			balance: 500
	// 		};
	// 		let actual = () => service.transfer(accountFrom, accountTo, 200);
	// 		expect(actual).toThrow();
	// 	});
	//
	// 	it('should thorw an error if userTo username is not a string', () =>{
	// 		let accountFrom:Account  = {
	// 			customerName: "123",
	// 			balance: 500
	// 		};
	// 		let accountTo:Account  = {
	// 			customerName: 56,
	// 			balance: 500
	// 		};
	// 		let actual = () => service.transfer(accountFrom, accountTo, 200);
	// 		expect(actual).toThrow();
	// 	});
	// });

});
