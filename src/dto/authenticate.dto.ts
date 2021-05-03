import { ApiProperty } from "@nestjs/swagger";


export class authenticateDto {

    @ApiProperty({ type: String, description: 'login' })
    login: string;
    @ApiProperty({ type: String, description: 'password' })
    password: string;

}