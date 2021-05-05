import { ApiProperty } from "@nestjs/swagger";


export class ResponseDto {
    @ApiProperty({ type: Boolean, description: 'success' })
    success: boolean;
    @ApiProperty({ type: String, description: 'message' })
    message: string;
    @ApiProperty({ type: Array, description: 'registers' })
    contains?: contains

}

interface contains {
    access_token?: string
    register?: any
}