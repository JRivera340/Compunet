import { UserBadge } from "../../user-badge/entities/user-badge.entity";
export declare class ExperienceBadge {
    id: number;
    name: string;
    minLevel: number;
    message: string;
    associatePrices?: string;
    usersBadges: UserBadge[];
}
