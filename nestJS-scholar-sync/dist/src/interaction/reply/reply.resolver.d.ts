import { MessageResponse } from "../../common/dto/message-response.type";
import { User } from "../../auth/user/entities/user.entity";
import { ReplyService } from './reply.service';
import { Reply } from './entities/reply.entity';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
export declare class ReplyResolver {
    private readonly replyService;
    constructor(replyService: ReplyService);
    replies(): Promise<Reply[]>;
    reply(id: number): Promise<Reply>;
    createReply(input: CreateReplyDto): Promise<Reply>;
    updateReply(id: number, input: UpdateReplyDto, currentUser: User): Promise<Reply>;
    removeReply(id: number, currentUser: User): Promise<MessageResponse>;
    likeReply(id: number): Promise<Reply>;
    validateReply(id: number): Promise<Reply>;
}
