import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ReplyService } from './reply.service';
import { ReplyResolver } from './reply.resolver';
import { Reply } from './entities/reply.entity';
import { Post } from 'src/interaction/post/entities/post.entity';
import { User } from 'src/auth/user/entities/user.entity';

import { UserModule } from 'src/auth/user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([Reply, Post, User]), UserModule],
    providers: [ReplyService, ReplyResolver],
})
export class ReplyModule {}
