import { Account } from "../main/account";
import { Repository } from "../main/repository";

describe("Account test", function () {
  const today = new Date("10-01-2012");
  jest.useFakeTimers("modern").setSystemTime(today);
  const accountRepository = { save: jest.fn() } as jest.Mocked<Repository>;
  const account = new Account(accountRepository);

  it("should save the deposit ", function () {
    account.deposit(1000);
    expect(accountRepository.save).toBeCalledWith(1000, today);
  });

  it("should withdraw amount", () => {
    account.withdraw(500);
    expect(accountRepository.save).toBeCalledWith(-500, today);
  });

  it.skip("should print statement", () => {
    account.withdraw(500);
    expect(account.printStatement()).toBeCalledWith("something");
  });
});
