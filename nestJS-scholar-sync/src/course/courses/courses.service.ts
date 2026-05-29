import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>,
    ) {}

    async create(createCourseDto: CreateCourseDto): Promise<Course> {
        const course = this.courseRepository.create(createCourseDto);
        return this.courseRepository.save(course);
    }

    async findAll(): Promise<any> {
        const courses = await this.courseRepository.find({
            relations: ['usersCourses', 'usersCourses.user'],
        });

        return courses.map((course) => ({
            id: course.id,
            name: course.name,
            credits: course.credits,
            duration: course.duration,
            startDate: course.startDate,
            users: course.usersCourses.map((uc) => ({
                id: uc.user.id,
                firstName: uc.user.firstName,
                lastName: uc.user.lastName,
                relationType: uc.relationType,
            })),
        }));
    }

    async findOne(id: number): Promise<Course> {
        const course = await this.courseRepository.findOne({
            where: { id },
            relations: ['usersCourses'],
        });
        if (!course) {
            throw new NotFoundException(`Course with id ${id} not found`);
        }
        return course;
    }

    async update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course> {
        const course = await this.findOne(id);
        Object.assign(course, updateCourseDto);
        return this.courseRepository.save(course);
    }

    async remove(id: number): Promise<{ message: string }> {
        const course = await this.findOne(id);
        await this.courseRepository.remove(course);
        return { message: `Course with id ${id} has been removed` };
    }
}
