import { Module } from '@nestjs/common';
import { TransfersService } from './transfers.service.js';
import { TransfersController } from './transfers.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transfer } from './entities/transfer.entity.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transfer])
  ],
  controllers: [TransfersController],
  providers: [TransfersService],
})
export class TransfersModule {}
