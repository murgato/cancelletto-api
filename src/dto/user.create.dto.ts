import { ApiProperty } from "@nestjs/swagger";

export class UserCreteDto {

    @ApiProperty({ type: String, description: 'nome' })
    name: string;

    @ApiProperty({ type: String, description: 'userName' })
    userName: string;

    @ApiProperty({ type: String, description: 'email' })
    email: string;

    @ApiProperty({ type: String, description: 'password' })
    password: string;

    @ApiProperty({ type: Date, description: 'dateBorn' })
    dateBorn: Date;

    @ApiProperty({ type: Number, description: 'height' })
    height: Number;

    @ApiProperty({ type: Number, description: 'weight' })
    weight: Number;

    @ApiProperty({ type: Number, description: 'imc' })
    imc: Number;

}