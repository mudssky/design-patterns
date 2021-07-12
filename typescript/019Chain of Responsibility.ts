abstract class Account {
  protected successor: Account | null = null
  protected abstract balance: number
  setNext(account: Account) {
    this.successor = account
  }
  pay(amountToPay: number) {
    if (this.canPay(amountToPay)) {
      console.log(`paid ${amountToPay} using ${this.constructor.toString()}`)
    } else if (this.successor) {
      console.log('cant pay ,using next...')
      this.successor.pay(amountToPay)
    } else {
      throw new Error('None of the accounts have enough balance')
    }
  }
  canPay(amount: number): boolean {
    return this.balance >= amount
  }
}

class Bank extends Account {
  protected balance: number
  constructor(balance: number) {
    super()
    this.balance = balance
  }
}

class Paypal extends Account {
  protected balance: number
  constructor(balance: number) {
    super()
    this.balance = balance
  }
}

class Bitcoin extends Account {
  protected balance: number
  constructor(balance: number) {
    super()
    this.balance = balance
  }
}

const bank = new Bank(100)
const paypal = new Paypal(200)
const bitcoin = new Bitcoin(300)

bank.setNext(paypal)
paypal.setNext(bitcoin)
bank.pay(259)
