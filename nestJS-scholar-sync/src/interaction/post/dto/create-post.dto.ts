import { Field, GraphQLISODateTime, InputType, Int } from '@nestjs/graphql';
import { IsDateString, IsInt, IsOptional, IsPositive, IsString, Length } from 'class-validator';

@InputType('CreatePostInput')
export class CreatePostDto {
    @Field(() => Int)
    @IsInt({ message: 'User ID must be an integer' })
    @IsPositive({ message: 'User ID must be a positive integer' })
    userId!: number;

    @Field()
    @IsString({ message: 'Title must be a string' })
    @Length(1, 30, { message: 'Title must be between 1 and 30 characters' })
    title!: string;

    @Field()
    @IsString({ message: 'Question must be a string' })
    @Length(1, 1000, { message: 'Question must be between 1 and 1000 characters' })
    question!: string;

    @Field(() => GraphQLISODateTime, { nullable: true })
    @IsDateString({}, { message: 'Date added must be a valid ISO date string' })
    @IsOptional()
    dateAdded?: string;
}
