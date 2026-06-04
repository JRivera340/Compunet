import { InputType, PartialType } from '@nestjs/graphql';

import { CreateUserDto } from './create-user.dto';

@InputType('UpdateUserInput')
export class UpdateUserDto extends PartialType(CreateUserDto) {}
