import { Controller, Post, Request, UseGuards, UseInterceptors } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger"
import { MorganInterceptor } from "nest-morgan"
import { AuthDto } from "src/dto/Auth.dto"
import { AuthService } from "src/services/Auth.service"

@ApiTags('auth')
@Controller('auth')
export class AuthControllers {
    constructor(
        private readonly authService: AuthService
    ) { }
    @ApiCreatedResponse({ type: AuthDto })
    @UseGuards(AuthGuard('local'))
    @UseInterceptors(MorganInterceptor('combined'))
    @Post('login')
    async login(@Request() auth: any) {
        console.log(auth.user)
        return this.authService.login(auth.user)
    }

}