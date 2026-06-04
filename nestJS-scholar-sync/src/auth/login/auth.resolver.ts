import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { GqlAuthGuard } from 'src/common/guards/gql-auth.guard';
import { MessageResponse } from 'src/common/dto/message-response.type';

import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { AuthPayload } from './dto/auth-payload.type';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Mutation(() => AuthPayload)
    login(@Args('input') input: UserLoginDto): Promise<AuthPayload> {
        return this.authService.login(input);
    }

    @Mutation(() => MessageResponse)
    @UseGuards(GqlAuthGuard)
    logout(): Promise<MessageResponse> {
        return this.authService.logout();
    }
}
