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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const user_role_entity_1 = require("../../user-role/entities/user-role.entity");
const user_badge_entity_1 = require("../../../badge/user-badge/entities/user-badge.entity");
const attendance_supp_session_entity_1 = require("../../../supplementary-session/attendance-supp-session/entities/attendance-supp-session.entity");
const post_entity_1 = require("../../../interaction/post/entities/post.entity");
const reply_entity_1 = require("../../../interaction/reply/entities/reply.entity");
const user_course_entity_1 = require("../../../course/user-course/entities/user-course.entity");
const create_user_dto_1 = require("../dto/create-user.dto");
let User = class User {
    id;
    email;
    password;
    firstName;
    lastName;
    profilePic;
    major1;
    major2;
    xp;
    level;
    usersRoles;
    usersBadges;
    attendanceAsTa;
    attendanceAsStudent;
    posts;
    replies;
    usersCourses;
};
exports.User = User;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ nullable: false, unique: true, length: 50 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 200 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ name: 'first_name', nullable: false, length: 20 }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ name: 'last_name', nullable: false, length: 20 }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ name: 'profile_pic', nullable: true, length: 100 }),
    __metadata("design:type", String)
], User.prototype, "profilePic", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ name: 'major_1', type: 'enum', enum: create_user_dto_1.Majors, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "major1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)({ name: 'major_2', type: 'enum', enum: create_user_dto_1.Majors, nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "major2", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], User.prototype, "xp", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], User.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_role_entity_1.UserRole, (userRole) => userRole.user, { eager: true }),
    __metadata("design:type", Array)
], User.prototype, "usersRoles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_badge_entity_1.UserBadge, (userBadge) => userBadge.user, { eager: true }),
    __metadata("design:type", Array)
], User.prototype, "usersBadges", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => attendance_supp_session_entity_1.AttendanceSuppSession, (attendanceSession) => attendanceSession.ta),
    __metadata("design:type", Array)
], User.prototype, "attendanceAsTa", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => attendance_supp_session_entity_1.AttendanceSuppSession, (attendanceSession) => attendanceSession.student),
    __metadata("design:type", Array)
], User.prototype, "attendanceAsStudent", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_entity_1.Post], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => post_entity_1.Post, (post) => post.user, { eager: true }),
    __metadata("design:type", Array)
], User.prototype, "posts", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reply_entity_1.Reply], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => reply_entity_1.Reply, (reply) => reply.user, { eager: true }),
    __metadata("design:type", Array)
], User.prototype, "replies", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_course_entity_1.UserCourse, (userCourse) => userCourse.user, { eager: true }),
    __metadata("design:type", Array)
], User.prototype, "usersCourses", void 0);
exports.User = User = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('users')
], User);
//# sourceMappingURL=user.entity.js.map