import { IsNotEmpty, IsEmail, Matches } from 'class-validator';

export class CreateQuickEnquiryDto {
  @IsNotEmpty()
  name: string;

  @Matches(/^[0-9]{10}$/, { message: 'Phone must be exactly 10 digits' })
  phone: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  message: string;
}
