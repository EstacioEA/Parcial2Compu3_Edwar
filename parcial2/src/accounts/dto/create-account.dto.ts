import { IsDecimal, IsInt, IsPositive, IsString } from "class-validator";


export class CreateAccountDto {
    @IsInt()
    @IsPositive()
    accountNumber: string;
    @IsString()
    type: String;
    @IsDecimal()
    @IsPositive()
    balance: number;
    @IsPositive()
    dailyLimit: number;
    @IsString()
    status: string 
}
