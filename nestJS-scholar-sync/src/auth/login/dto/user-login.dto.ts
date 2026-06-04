import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, Length } from 'class-validator';

@InputType()
export class UserLoginDto {
    @Field()
    @IsEmail({}, { message: 'Email must be a valid email address' })
    email!: string;

    @Field()
    @IsString({ message: 'Password must be a string' })
    @Length(6, 20, { message: 'Password must be between 6 and 20 characters' })
    password!: string;
}
