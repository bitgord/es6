// Create BankAccount class
class BankAccount {
	constructor (balance) {
		this.balance = typeof balance === 'number' ? balance : 0;
	}
	set balance (val) {
		this._balance = val;
		this.balanceUpdatedAt = new Date();
	}
	get balance () {
		return this._balance;
	}
	deposit (amount) {
		if (typeof amount === 'number') {
			this.balance += amount;
			return true;
		} else {
			console.log('Amount must be a number');
			return false;
		}
	}
	withdrawal (amount) {
		if (typeof amount === 'number') {
			this.balance -= amount;
			return this.balance;
		} else {
			console.log('Amount must be a number');
			return false;
		}
	}
	printBalance () {
		console.log(`Your balance is $${this.balance} updated at ${this.balanceUpdatedAt}`);
	}
}
// Allow constructor function to take balance, default to zero if not number
// Deposit (amount)
// Withdrawal (amount)
// printBalance ()

var account = new BankAccount(100);
account.deposit(100);
account.withdrawal(10);
account.printBalance();

var account2 = new BankAccount('rara');
account2.deposit('Andrew');
account2.withdrawal(true);
account2.printBalance();