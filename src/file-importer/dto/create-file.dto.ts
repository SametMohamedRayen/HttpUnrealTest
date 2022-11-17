import { IsString, Length } from 'class-validator';

export class CreateFileDto {
  @IsString()
  @Length(3)
  designation: string;
  @IsString()
  file64base:string;
}