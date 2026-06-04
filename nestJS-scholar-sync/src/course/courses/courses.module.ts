import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Course])],
    providers: [CoursesService],
    exports: [CoursesService],
})
export class CoursesModule {}
