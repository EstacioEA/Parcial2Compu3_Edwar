import { IsDecimal, IsInt, IsString } from "class-validator";

export class CreateTransferDto {
    @IsString()
    reference: string;

    @IsDecimal()
    amount: number;

    @IsString()
    status: string;

    @IsInt()
    sourceAccount: number

    @IsInt()
    destinationAccount: number

    @IsString()
    rejectionReason?: string
}
