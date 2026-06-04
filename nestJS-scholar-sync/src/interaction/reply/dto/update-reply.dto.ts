import { InputType, PartialType } from '@nestjs/graphql';

import { CreateReplyDto } from './create-reply.dto';

@InputType('UpdateReplyInput')
export class UpdateReplyDto extends PartialType(CreateReplyDto) {}
