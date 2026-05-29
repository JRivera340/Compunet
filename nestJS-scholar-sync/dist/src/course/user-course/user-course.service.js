"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCourseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_course_entity_1 = require("./entities/user-course.entity");
const user_entity_1 = require("../../auth/user/entities/user.entity");
const course_entity_1 = require("../courses/entities/course.entity");
const typeorm_2 = require("typeorm");
let UserCourseService = class UserCourseService {
    userCourseRepository;
    userRepository;
    courseRepository;
    constructor(userCourseRepository, userRepository, courseRepository) {
        this.userCourseRepository = userCourseRepository;
        this.userRepository = userRepository;
        this.courseRepository = courseRepository;
    }
    async create(createUserCourseDto) {
        const user = await this.userRepository.findOne({
            where: { id: createUserCourseDto.userId },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${createUserCourseDto.userId} not found`);
        }
        const course = await this.courseRepository.findOne({
            where: { id: createUserCourseDto.courseId },
        });
        if (!course) {
            throw new common_1.NotFoundException(`Course with id ${createUserCourseDto.courseId} not found`);
        }
        const existing = await this.userCourseRepository.findOne({
            where: { user: { id: user.id }, course: { id: course.id } },
        });
        if (existing) {
            throw new common_1.ConflictException(`User ${user.id} is already enrolled in course ${course.id}`);
        }
        const userCourse = this.userCourseRepository.create({
            user,
            course,
            relationType: createUserCourseDto.relationType,
        });
        return this.userCourseRepository.save(userCourse);
    }
    async findAll() {
        return this.userCourseRepository.find({ relations: ['user', 'course'] });
    }
    async findOne(id) {
        const userCourse = await this.userCourseRepository.findOne({
            where: { id },
            relations: ['user', 'course'],
        });
        if (!userCourse) {
            throw new common_1.NotFoundException(`UserCourse with id ${id} not found`);
        }
        return userCourse;
    }
    async update(id, updateUserCourseDto) {
        const userCourse = await this.findOne(id);
        if (updateUserCourseDto.relationType) {
            userCourse.relationType = updateUserCourseDto.relationType;
        }
        return this.userCourseRepository.save(userCourse);
    }
    async remove(id) {
        const userCourse = await this.findOne(id);
        await this.userCourseRepository.remove(userCourse);
        return { message: `UserCourse with id ${id} has been removed` };
    }
};
exports.UserCourseService = UserCourseService;
exports.UserCourseService = UserCourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_course_entity_1.UserCourse)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UserCourseService);
//# sourceMappingURL=user-course.service.js.map