import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';

import { Post } from 'src/interaction/post/entities/post.entity';
import { User } from 'src/auth/user/entities/user.entity';

@ObjectType()
@Entity('replies')
export class Reply {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => Post)
    @ManyToOne(() => Post, (post) => post.replies, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'post_id' })
    post!: Post;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.replies, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @Field(() => [Reply], { nullable: true })
    @OneToMany(() => Reply, (reply) => reply.reply, { nullable: true })
    replies?: Reply[];

    @ManyToOne(() => Reply, (reply) => reply.replies, { nullable: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'reply_id' })
    reply?: Reply | null;

    @Field()
    @Column({ name: 'reply_message', nullable: false, length: 1000 })
    replyMessage!: string;

    @Field(() => GraphQLISODateTime)
    @Column({ name: 'date_added', type: 'timestamp', nullable: false })
    dateAdded!: Date;

    @Field(() => Int)
    @Column({ nullable: false })
    likes!: number;

    @Field(() => Int)
    @Column({ nullable: false })
    approvals!: number;

    @Field()
    @Column({ name: 'is_validated', type: 'boolean', default: false })
    isValidated!: boolean;
}
