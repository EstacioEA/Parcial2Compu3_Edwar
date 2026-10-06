import { IsEmail, IsInt, IsPhoneNumber, IsPositive, IsString } from "class-validator";

export class CreateClientDto {
    @IsInt()
    @IsPositive()
    documentNumber: string

    @IsString()
    fullName: String

    @IsEmail()
    email: string

    @IsPhoneNumber()
    phone: string
}
