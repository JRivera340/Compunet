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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCourse = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../../auth/user/entities/user.entity");
const course_entity_1 = require("../../courses/entities/course.entity");
const create_user_course_dto_1 = require("../dto/create-user-course.dto");
let UserCourse = class UserCourse {
    id;
    user;
    course;
    relationType;
};
exports.UserCourse = UserCourse;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserCourse.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.usersCourses, { nullable: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], UserCourse.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course, (course) => course.usersCourses, { nullable: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'course_id' }),
    __metadata("design:type", course_entity_1.Course)
], UserCourse.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'relation_type', type: 'enum', enum: create_user_course_dto_1.UserCourseRelationTypes, nullable: false }),
    __metadata("design:type", String)
], UserCourse.prototype, "relationType", void 0);
exports.UserCourse = UserCourse = __decorate([
    (0, typeorm_1.Entity)('users_courses'),
    (0, typeorm_1.Unique)(['user', 'course'])
], UserCourse);
//# sourceMappingURL=user-course.entity.js.map