import { PartialType } from '@nestjs/mapped-types';
import { CreateBeneficiaryDto } from './create-beneficiary.dto.js';

export class UpdateBeneficiaryDto extends PartialType(CreateBeneficiaryDto) {}
