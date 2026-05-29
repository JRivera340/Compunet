import { CreateUserCourseDto } from './dto/create-user-course.dto';
import { UpdateUserCourseDto } from './dto/update-user-course.dto';
import { UserCourse } from './entities/user-course.entity';
import { User } from "../../auth/user/entities/user.entity";
import { Course } from '../courses/entities/course.entity';
import { Repository } from 'typeorm';
export declare class UserCourseService {
    private readonly userCourseRepository;
    private readonly userRepository;
    private readonly courseRepository;
    constructor(userCourseRepository: Repository<UserCourse>, userRepository: Repository<User>, courseRepository: Repository<Course>);
    create(createUserCourseDto: CreateUserCourseDto): Promise<UserCourse>;
    findAll(): Promise<UserCourse[]>;
    findOne(id: number): Promise<UserCourse>;
    update(id: number, updateUserCourseDto: UpdateUserCourseDto): Promise<UserCourse>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
