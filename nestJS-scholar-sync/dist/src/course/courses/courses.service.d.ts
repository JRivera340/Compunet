import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
export declare class CoursesService {
    private readonly courseRepository;
    constructor(courseRepository: Repository<Course>);
    create(createCourseDto: CreateCourseDto): Promise<Course>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<Course>;
    update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
