import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service.js';
import { AccountsController } from './accounts.controller.js';
import { Account } from './entities/account.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forFeature([Account])
    ],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
