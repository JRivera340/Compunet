import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { User } from "../../auth/user/entities/user.entity";
import { UserService } from "../../auth/user/user.service";
export declare class PostService {
    private readonly postRepository;
    private readonly userRepository;
    private readonly userService;
    constructor(postRepository: Repository<Post>, userRepository: Repository<User>, userService: UserService);
    create(createPostDto: CreatePostDto): Promise<Post>;
    findAll(): Promise<Post[]>;
    findOne(id: number): Promise<Post>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<Post>;
    remove(id: number): Promise<void>;
}
