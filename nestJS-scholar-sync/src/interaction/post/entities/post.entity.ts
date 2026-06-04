import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';

import { User } from 'src/auth/user/entities/user.entity';
import { Reply } from 'src/interaction/reply/entities/reply.entity';

@ObjectType()
@Entity('posts')
export class Post {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.posts, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @Field()
    @Column({ nullable: false, length: 30 })
    title!: string;

    @Field()
    @Column({ nullable: false, length: 1000 })
    question!: string;

    @Field(() => GraphQLISODateTime)
    @Column({ name: 'date_added', type: 'timestamp', nullable: false })
    dateAdded!: Date;

    @Field(() => [Reply], { nullable: true })
    @OneToMany(() => Reply, (reply) => reply.post, { eager: true })
    replies!: Reply[];
}
