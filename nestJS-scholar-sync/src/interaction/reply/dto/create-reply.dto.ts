import { Field, GraphQLISODateTime, InputType, Int } from '@nestjs/graphql';
import { IsDateString, IsInt, IsOptional, IsPositive, IsString, Length } from 'class-validator';

@InputType()
export class CreateReplyDto {
    @Field(() => Int)
    @IsInt({ message: 'Post ID must be an integer' })
    @IsPositive({ message: 'Post ID must be a positive integer' })
    postId!: number;

    @Field(() => Int)
    @IsInt({ message: 'User ID must be an integer' })
    @IsPositive({ message: 'User ID must be a positive integer' })
    userId!: number;

    @Field(() => Int, { nullable: true })
    @IsInt({ message: 'Reply ID must be an integer' })
    @IsPositive({ message: 'Reply ID must be a positive integer' })
    @IsOptional()
    replyId?: number;

    @Field()
    @IsString({ message: 'Reply message must be a string' })
    @Length(1, 1000, { message: 'Reply message must be between 1 and 1000 characters' })
    replyMessage!: string;

    @Field(() => GraphQLISODateTime, { nullable: true })
    @IsDateString({}, { message: 'Date added must be a valid ISO date string' })
    @IsOptional()
    dateAdded?: string;
}
