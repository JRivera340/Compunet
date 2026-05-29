import { ReplyService } from './reply.service';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
export declare class ReplyController {
    private readonly replyService;
    constructor(replyService: ReplyService);
    create(createReplyDto: CreateReplyDto): Promise<import("./entities/reply.entity").Reply>;
    findAll(): Promise<import("./entities/reply.entity").Reply[]>;
    findOne(id: number): Promise<import("./entities/reply.entity").Reply>;
    update(id: number, updateReplyDto: UpdateReplyDto): Promise<import("./entities/reply.entity").Reply>;
    remove(id: number): Promise<void>;
    like(id: number): Promise<import("./entities/reply.entity").Reply>;
    validate(id: number): Promise<import("./entities/reply.entity").Reply>;
}
