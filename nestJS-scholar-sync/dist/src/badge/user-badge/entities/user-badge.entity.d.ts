import { User } from "../../../auth/user/entities/user.entity";
import { ExperienceBadge } from "../../experience-badge/entities/experience-badge.entity";
export declare class UserBadge {
    id: number;
    user: User;
    experienceBadge: ExperienceBadge;
    dateAcquired: Date;
}
