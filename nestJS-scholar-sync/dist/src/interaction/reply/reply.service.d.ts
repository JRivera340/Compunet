import { Repository } from 'typeorm';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { Reply } from './entities/reply.entity';
import { Post } from "../post/entities/post.entity";
import { User } from "../../auth/user/entities/user.entity";
import { UserService } from "../../auth/user/user.service";
export declare class ReplyService {
    private readonly replyRepository;
    private readonly postRepository;
    private readonly userRepository;
    private readonly userService;
    constructor(replyRepository: Repository<Reply>, postRepository: Repository<Post>, userRepository: Repository<User>, userService: UserService);
    create(createReplyDto: CreateReplyDto): Promise<Reply>;
    findAll(): Promise<Reply[]>;
    findOne(id: number): Promise<Reply>;
    update(id: number, updateReplyDto: UpdateReplyDto): Promise<Reply>;
    remove(id: number): Promise<void>;
    like(id: number): Promise<Reply>;
    validate(id: number): Promise<Reply>;
}
