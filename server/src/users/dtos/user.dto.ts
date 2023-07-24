import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';

export class UserDTO {
  @IsUUID(null, { message: 'ID inválido' })
  @ApiProperty()
  id: string;

  @IsString({ message: 'Nome Inválido' })
  @Length(5, 200, { message: 'Nome deve conter entre 5 e 200 caracteres' })
  @ApiProperty()
  name: string;

  @IsString({ message: 'CPF deve ser um texto e somente números' })
  @Length(11, 11, {
    message: 'CPF deve conter 11 caracteres e somente números',
  })
  @ApiProperty()
  cpf: string;

  @IsEmail({}, { message: 'Email inválido' })
  @ApiProperty()
  email: string;

  @IsString({ message: 'Cor inválida' })
  @Length(1, 100)
  @ApiProperty()
  color: string;

  @IsString({ message: 'A observação de ser um texto.' })
  @ApiProperty()
  notes: string;

  @IsDate({ message: 'Data inválida' })
  @ApiProperty()
  created_at: Date;

  @IsDate({ message: 'Data inválida' })
  @ApiProperty()
  updated_at: Date;

  @IsBoolean()
  @ApiProperty()
  deleted: boolean;
}
