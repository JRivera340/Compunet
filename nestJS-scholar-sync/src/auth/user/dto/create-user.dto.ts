import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsInt, IsOptional, IsPositive, IsString, Length, Max } from 'class-validator';

export enum Majors {
    SE = 'Software Engineering',
    BIO = 'Biology',
    CHEM = 'Chemistry',
    PHYS = 'Physics',
    MATH = 'Mathematics',
}

@InputType('CreateUserInput')
export class CreateUserDto {
    @Field()
    @IsEmail({}, { message: 'Email must be a valid email address' })
    @Length(5, 50, { message: 'Email must be between 5 and 50 characters' })
    email!: string;

    @Field()
    @IsString({ message: 'Password must be a string' })
    @Length(8, 30, { message: 'Password must be between 8 and 30 characters' })
    password!: string;

    @Field()
    @IsString({ message: 'First name must be a string' })
    @Length(1, 20, { message: 'First name must be between 1 and 20 characters' })
    firstName!: string;

    @Field()
    @IsString({ message: 'Last name must be a string' })
    @Length(1, 20, { message: 'Last name must be between 1 and 20 characters' })
    lastName!: string;

    @Field({ nullable: true })
    @IsString({ message: 'Profile picture must be a string' })
    @Length(0, 100, { message: 'Profile picture must be at most 100 characters' })
    @IsOptional()
    profilePic?: string;

    @Field(() => String)
    @IsString({ message: 'Major 1 must be a string' })
    @IsEnum(Majors, { message: `Major 1 must be one of the following: ${Object.values(Majors).join(', ')}` })
    major1!: Majors;

    @Field(() => String, { nullable: true })
    @IsString({ message: 'Major 2 must be a string' })
    @IsEnum(Majors, { message: `Major 2 must be one of the following: ${Object.values(Majors).join(', ')}` })
    @IsOptional()
    major2?: Majors;

    @Field(() => Int)
    @IsInt({ message: 'XP must be an integer' })
    @IsPositive({ message: 'XP must be a positive integer' })
    @Max(100, { message: 'XP must be less than or equal to 100' })
    xp!: number;

    @Field(() => Int)
    @IsInt({ message: 'Level must be an integer' })
    @IsPositive({ message: 'Level must be a positive integer' })
    @Max(30, { message: 'Level must be less than or equal to 30' })
    level!: number;
}
