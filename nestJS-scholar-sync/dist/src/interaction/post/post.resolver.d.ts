import { MessageResponse } from "../../common/dto/message-response.type";
import { User } from "../../auth/user/entities/user.entity";
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostResolver {
    private readonly postService;
    constructor(postService: PostService);
    posts(): Promise<Post[]>;
    post(id: number): Promise<Post>;
    createPost(input: CreatePostDto): Promise<Post>;
    updatePost(id: number, input: UpdatePostDto, currentUser: User): Promise<Post>;
    removePost(id: number, currentUser: User): Promise<MessageResponse>;
}
