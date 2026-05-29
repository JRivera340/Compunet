import { Post } from "../../post/entities/post.entity";
import { User } from "../../../auth/user/entities/user.entity";
export declare class Reply {
    id: number;
    post: Post;
    user: User;
    replies?: Reply[];
    reply?: Reply | null;
    replyMessage: string;
    dateAdded: Date;
    likes: number;
    approvals: number;
    isValidated: boolean;
}
