import {Example} from "../main/example";
import createMockFromModule = jest.createMockFromModule;
interface Repository{
  save(amount: number, transactionDate: Date):void
}
class Account {
  private accountRepository: Repository;
  constructor(accountRepository:Repository) {
    this.accountRepository = accountRepository;
  }

  deposit(number: number) {
    return this.accountRepository.save(number, new Date())
  }
}

describe('', function () {
  it('should ', function () {
    const accountRepository = { save: jest.fn() } as jest.Mocked<Repository>;const account = new Account(accountRepository)
    const today = new Date('10-01-2012');
    jest.useFakeTimers('modern').setSystemTime(today);
    account.deposit(1000)
    expect(accountRepository.save).toBeCalledWith(1000,today)
  });

});

