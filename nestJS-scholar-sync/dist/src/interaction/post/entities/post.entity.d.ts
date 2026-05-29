import { User } from "../../../auth/user/entities/user.entity";
import { Reply } from "../../reply/entities/reply.entity";
export declare class Post {
    id: number;
    user: User;
    title: string;
    question: string;
    dateAdded: Date;
    replies: Reply[];
}
