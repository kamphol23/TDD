import { TestBed } from '@angular/core/testing';
import {Account} from '../account';


import { BankService } from './bank.service';


describe('BankService', () => {
	let service: BankService;


	beforeEach(() => {

		TestBed.configureTestingModule({});
		service = TestBed.get(BankService);

	});






	it('should be created', () => {
		const service: BankService = TestBed.get(BankService);
		expect(service).toBeTruthy();
	});





	describe('getBalance', () => {

		it('Should have an function getBalance', () =>{
			expect(service.getBalance).toBeTruthy();
		})

		it('should return the balance from the account if everything is valid',() =>{
			let account = {
				customerName: 'kamphol',
				balance: 100
			}
			let actual = service.getBalance(account);
			expect(actual).toBe(100)
		});


		it('should throw an error if balance is below zero ', () =>{
			let account = {
				customerName: 'kamphol',
				balance:-123
			}

			let actual = () => service.getBalance(account);
			expect(actual).toThrow();
		});

		it('should throw an error if username have whitespace at start', () =>{
			let account = {
				customerName: ' kamphol ',
				balance: 100
			};


			let actual  = () =>  service.getBalance(account);
			expect(actual).toThrow();
		});


		it('should throw an error if username is a empty string', () =>{
			let account = {
				customerName:'',
				balance:100
			};
			let actual  = () =>  service.getBalance(account);
			expect(actual).toThrow();
		});


		it('should throw an error if username is null', () =>{
			let account = {
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

		it('should throw an error if username have whitespace at the start', () => {
			let account = {
				customerName: ' kamphol',
				balance: 100
			};

			let amount = 10
			let actual = () => service.deposit(account, amount);
			expect(actual).toThrow();
		});

		it('should throw an error if username is a empty string', () => {
			let account = {
				customerName: '',
				balance: 100
			};
			let amount = 10


			let actual = () => service.deposit(account, amount);
			expect(actual).toThrow();
		});

		it('should throw an error if username is null', () =>{
			let account = {
				customerName: null,
				balance: 200
			}
			let actual = () => service.deposit(account, 100);

			expect(actual).toThrow();
		});

		it('should throw an error if deposit is equal to zero', () => {
			let account = {
				customerName: 'kamphol',
				balance: 100
			};
			let actual = () => service.deposit(account, 0);
			expect(actual).toThrow();
		});

		it('should throw an error if deposit is below zero', () => {
			let account = {
				customerName: 'kamphol',
				balance: -1
			};
			let actual = () => service.deposit(account, -1);
			expect(actual).toThrow();
		});



		it('should add the selected amount', () => {
			let account = {
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

		it('should throw an error if username has whitespace at the start', () => {
			let account = {
				customerName:' kamphol',
				balance: 1200
			};
			let amount = 100;
			let actual = () => service.withdraw(account, amount);
			expect(actual).toThrow();
		});

		it('should throw an error if username is a empty string', () =>{
			let account = {
				customerName: '',
				balance: 1200
			};
			let amount = 100;
			let actual = () => service.withdraw(account, amount);
			expect(actual).toThrow();
		});

		it('should throw an error if username is null', () =>{
			let account = {
				customerName: null,
				balance: 1000
			}
			let amount = 100;
			let actual = () => service.withdraw(account, amount);
			expect(actual).toThrow();
		});

	

		it('should thorw an error if amount is equal to zero', () =>{
			let account = {
				customerName: 'kamphol',
				balance: 0
			};
			let actual = () => service.withdraw(account, account.balance);
			expect(actual).toThrow();
		});

		it('should thorw an error if amount is below zero', () =>{
			let account = {
				customerName: 'kamphol',
				balance: -1
			};
			let actual = () => service.withdraw(account, account.balance);
			expect(actual).toThrow();
		});

		it('should thorw an error if amount bigger then account balance', () =>{
			let account = {
				customerName: 'kamphol',
				balance: 15000
			};
			let actual = () => service.withdraw(account, 20000);
			expect(actual).toThrow();
		});

		it('should revome the selected amount', () => {
			let account = {
				customerName: 'kamphol',
				balance: 500
			};
			let amount = 100;
			let expectedBalance = account.balance + amount;
			let actual = service.deposit(account, amount);
			expect(account.balance).toBe(expectedBalance);
		});

	});



});
