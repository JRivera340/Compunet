import { User } from "../../../auth/user/entities/user.entity";
import { Course } from "../../courses/entities/course.entity";
import { UserCourseRelationTypes } from '../dto/create-user-course.dto';
export declare class UserCourse {
    id: number;
    user: User;
    course: Course;
    relationType: UserCourseRelationTypes;
}
