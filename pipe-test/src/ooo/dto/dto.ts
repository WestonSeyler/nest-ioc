import { IsInt } from 'class-validator';
export class Ooo {
  name: string;
  @IsInt()
  age: number;
  sex: number;
  hobbies: Array<number>;
}
