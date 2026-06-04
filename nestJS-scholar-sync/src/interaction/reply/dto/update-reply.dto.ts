import { InputType, PartialType } from '@nestjs/graphql';

import { CreateReplyDto } from './create-reply.dto';

@InputType()
export class UpdateReplyDto extends PartialType(CreateReplyDto) {}
