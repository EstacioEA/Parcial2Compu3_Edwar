import { IsInt, IsPositive, IsString } from "class-validator";

export class CreateBeneficiaryDto {
    @IsString()
    alias: string;
    @IsInt()
    @IsPositive()
    clientId: number;
}
