import { Module } from '@nestjs/common';
import { BeneficiariesService } from './beneficiaries.service.js';
import { BeneficiariesController } from './beneficiaries.controller.js';
import { Beneficiary } from './entities/beneficiary.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forFeature([Beneficiary])
    ],
  controllers: [BeneficiariesController],
  providers: [BeneficiariesService],
})
export class BeneficiariesModule {}
