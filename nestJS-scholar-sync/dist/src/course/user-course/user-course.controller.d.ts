import { UserCourseService } from './user-course.service';
import { CreateUserCourseDto } from './dto/create-user-course.dto';
import { UpdateUserCourseDto } from './dto/update-user-course.dto';
export declare class UserCourseController {
    private readonly userCourseService;
    constructor(userCourseService: UserCourseService);
    create(createUserCourseDto: CreateUserCourseDto): Promise<import("./entities/user-course.entity").UserCourse>;
    findAll(): Promise<import("./entities/user-course.entity").UserCourse[]>;
    findOne(id: number): Promise<import("./entities/user-course.entity").UserCourse>;
    update(id: number, updateUserCourseDto: UpdateUserCourseDto): Promise<import("./entities/user-course.entity").UserCourse>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
