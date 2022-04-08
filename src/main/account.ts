import { Repository } from "./repository";

export class Account {
  private accountRepository: Repository;
  constructor(accountRepository: Repository) {
    this.accountRepository = accountRepository;
  }

  deposit(number: number): void {
    return this.accountRepository.save(number, new Date());
  }

  withdraw(amount: number): void {
    return this.accountRepository.save(-amount, new Date());
  }
}
