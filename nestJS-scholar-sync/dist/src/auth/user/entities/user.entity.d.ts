import { UserRole } from "../../user-role/entities/user-role.entity";
import { UserBadge } from "../../../badge/user-badge/entities/user-badge.entity";
import { AttendanceSuppSession } from "../../../supplementary-session/attendance-supp-session/entities/attendance-supp-session.entity";
import { Post } from "../../../interaction/post/entities/post.entity";
import { Reply } from "../../../interaction/reply/entities/reply.entity";
import { UserCourse } from "../../../course/user-course/entities/user-course.entity";
import { Majors } from '../dto/create-user.dto';
export declare class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    profilePic?: string;
    major1: Majors;
    major2?: Majors | null;
    xp: number;
    level: number;
    usersRoles: UserRole[];
    usersBadges: UserBadge[];
    attendanceAsTa: AttendanceSuppSession[];
    attendanceAsStudent: AttendanceSuppSession[];
    posts: Post[];
    replies: Reply[];
    usersCourses: UserCourse[];
}
