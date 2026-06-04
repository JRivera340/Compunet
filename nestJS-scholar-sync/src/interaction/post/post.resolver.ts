import { ForbiddenException, UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { GqlAuthGuard } from 'src/common/guards/gql-auth.guard';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { MessageResponse } from 'src/common/dto/message-response.type';
import { User } from 'src/auth/user/entities/user.entity';

import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

const isAdmin = (user: User): boolean => user.usersRoles?.some((ur) => ur.role.name === 'Admin');

@Resolver(() => Post)
@UseGuards(GqlAuthGuard)
export class PostResolver {
    constructor(private readonly postService: PostService) {}

    @Query(() => [Post])
    posts(): Promise<Post[]> {
        return this.postService.findAll();
    }

    @Query(() => Post)
    post(@Args('id', { type: () => Int }) id: number): Promise<Post> {
        return this.postService.findOne(id);
    }

    @Mutation(() => Post)
    createPost(@Args('input') input: CreatePostDto): Promise<Post> {
        return this.postService.create(input);
    }

    @Mutation(() => Post)
    async updatePost(
        @Args('id', { type: () => Int }) id: number,
        @Args('input') input: UpdatePostDto,
        @CurrentUser() currentUser: User,
    ): Promise<Post> {
        const post = await this.postService.findOne(id);
        if (!isAdmin(currentUser) && post.user.id !== currentUser.id) {
            throw new ForbiddenException('You can only update your own posts');
        }
        return this.postService.update(id, input);
    }

    @Mutation(() => MessageResponse)
    async removePost(
        @Args('id', { type: () => Int }) id: number,
        @CurrentUser() currentUser: User,
    ): Promise<MessageResponse> {
        const post = await this.postService.findOne(id);
        if (!isAdmin(currentUser) && post.user.id !== currentUser.id) {
            throw new ForbiddenException('You can only delete your own posts');
        }
        await this.postService.remove(id);
        return { message: `Post with ID ${id} removed successfully` };
    }
}
