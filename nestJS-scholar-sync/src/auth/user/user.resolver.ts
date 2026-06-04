import { ForbiddenException, UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { GqlAuthGuard } from 'src/common/guards/gql-auth.guard';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { MessageResponse } from 'src/common/dto/message-response.type';

import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const isAdmin = (user: User): boolean => user.usersRoles?.some((ur) => ur.role.name === 'Admin');

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [User])
    @UseGuards(GqlAuthGuard)
    users(): Promise<User[]> {
        return this.userService.findAllFull();
    }

    @Query(() => User)
    @UseGuards(GqlAuthGuard)
    user(@Args('id', { type: () => Int }) id: number): Promise<User> {
        return this.userService.findOne(id);
    }

    @Mutation(() => User)
    createUser(@Args('input') input: CreateUserDto): Promise<User> {
        return this.userService.create(input);
    }

    @Mutation(() => User)
    @UseGuards(GqlAuthGuard)
    updateUser(
        @Args('id', { type: () => Int }) id: number,
        @Args('input') input: UpdateUserDto,
        @CurrentUser() currentUser: User,
    ): Promise<User> {
        if (!isAdmin(currentUser) && currentUser.id !== id) {
            throw new ForbiddenException('You can only update your own account');
        }
        return this.userService.update(id, input);
    }

    @Mutation(() => MessageResponse)
    @UseGuards(GqlAuthGuard)
    removeUser(
        @Args('id', { type: () => Int }) id: number,
        @CurrentUser() currentUser: User,
    ): Promise<MessageResponse> {
        if (!isAdmin(currentUser)) {
            throw new ForbiddenException('Only an admin can delete users');
        }
        return this.userService.remove(id);
    }
}
