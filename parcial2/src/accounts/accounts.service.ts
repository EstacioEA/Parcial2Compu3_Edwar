import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto.js';
import { UpdateAccountDto } from './dto/update-account.dto.js';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity.js';

@Injectable()
export class AccountsService {
  constructor(
    private readonly accountRepository: Repository<Account>
  ){}
  async create(createAccountDto: CreateAccountDto) {
    const account = await this.accountRepository.create(createAccountDto)
    return await this.accountRepository.save(account);
  }

  async findAll() {
    return await this.accountRepository.find();
  }

  async findOne(id: number) {
    const account = await this.accountRepository.findOneBy({id})

    if (!account) {
      throw new NotFoundException("account not found")
    }

    return account;
  }

  async update(id: number, updateAccountDto: UpdateAccountDto) {
    const account = await this.accountRepository.findOneBy({id})

    if (!account) {
      throw new NotFoundException("account not found")
    }

    return await this.accountRepository.update(id, updateAccountDto);
  }

  async remove(id: number) {
    const account = await this.accountRepository.findOneBy({id})

    if (!account) {
      throw new NotFoundException("account not found")
    }
    return await this.accountRepository.remove(account);
  }
}
