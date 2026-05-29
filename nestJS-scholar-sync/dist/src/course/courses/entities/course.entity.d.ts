import { UserCourse } from "../../user-course/entities/user-course.entity";
export declare class Course {
    id: number;
    name: string;
    credits: number;
    duration: number;
    startDate: Date;
    usersCourses: UserCourse[];
}
