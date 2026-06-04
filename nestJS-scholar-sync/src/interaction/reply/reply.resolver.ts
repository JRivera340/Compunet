import { ForbiddenException, UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { GqlAuthGuard } from 'src/common/guards/gql-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { MessageResponse } from 'src/common/dto/message-response.type';
import { User } from 'src/auth/user/entities/user.entity';

import { ReplyService } from './reply.service';
import { Reply } from './entities/reply.entity';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';

const isAdmin = (user: User): boolean => user.usersRoles?.some((ur) => ur.role.name === 'Admin');

@Resolver(() => Reply)
@UseGuards(GqlAuthGuard)
export class ReplyResolver {
    constructor(private readonly replyService: ReplyService) {}

    @Query(() => [Reply])
    replies(): Promise<Reply[]> {
        return this.replyService.findAll();
    }

    @Query(() => Reply)
    reply(@Args('id', { type: () => Int }) id: number): Promise<Reply> {
        return this.replyService.findOne(id);
    }

    @Mutation(() => Reply)
    createReply(@Args('input') input: CreateReplyDto): Promise<Reply> {
        return this.replyService.create(input);
    }

    @Mutation(() => Reply)
    async updateReply(
        @Args('id', { type: () => Int }) id: number,
        @Args('input') input: UpdateReplyDto,
        @CurrentUser() currentUser: User,
    ): Promise<Reply> {
        const reply = await this.replyService.findOne(id);
        if (!isAdmin(currentUser) && reply.user.id !== currentUser.id) {
            throw new ForbiddenException('You can only update your own replies');
        }
        return this.replyService.update(id, input);
    }

    @Mutation(() => MessageResponse)
    async removeReply(
        @Args('id', { type: () => Int }) id: number,
        @CurrentUser() currentUser: User,
    ): Promise<MessageResponse> {
        const reply = await this.replyService.findOne(id);
        if (!isAdmin(currentUser) && reply.user.id !== currentUser.id) {
            throw new ForbiddenException('You can only delete your own replies');
        }
        await this.replyService.remove(id);
        return { message: `Reply with ID ${id} removed successfully` };
    }

    @Mutation(() => Reply)
    likeReply(@Args('id', { type: () => Int }) id: number): Promise<Reply> {
        return this.replyService.like(id);
    }

    @Mutation(() => Reply)
    @UseGuards(RolesGuard)
    @Roles('Professor', 'TA')
    validateReply(@Args('id', { type: () => Int }) id: number): Promise<Reply> {
        return this.replyService.validate(id);
    }
}
