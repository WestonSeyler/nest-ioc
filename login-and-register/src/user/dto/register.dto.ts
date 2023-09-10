import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';
export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @Length(6, 30)
  @Matches(/^[a-zA-Z0-9]{6,30}$/, {
    message: '用户名格式错误',
  })
  username: string;
  @IsString()
  @IsNotEmpty()
  @Length(6, 30)
  password: string;
}
