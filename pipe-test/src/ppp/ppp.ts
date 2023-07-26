import {
  Contains,
  IsDate,
  IsEmail,
  IsFQDN,
  IsInt,
  Length,
  Max,
  Min,
} from 'class-validator';

export class Ppp {
  @Length(10, 20)
  title: string;

  @Contains('hello')
  text: string;

  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @IsEmail()
  email: string;

  @IsFQDN()
  site: string;
}
