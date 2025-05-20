import { IsArray, IsOptional, IsString } from "class-validator";

export class CreateNotifierDto {

  @IsArray()
  to: string[];


  @IsString()
  message: string;

  @IsOptional()
  urls : string[];

}
