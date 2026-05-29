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
exports.UserCourseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_course_service_1 = require("./user-course.service");
const create_user_course_dto_1 = require("./dto/create-user-course.dto");
const update_user_course_dto_1 = require("./dto/update-user-course.dto");
let UserCourseController = class UserCourseController {
    userCourseService;
    constructor(userCourseService) {
        this.userCourseService = userCourseService;
    }
    create(createUserCourseDto) {
        return this.userCourseService.create(createUserCourseDto);
    }
    findAll() {
        return this.userCourseService.findAll();
    }
    findOne(id) {
        return this.userCourseService.findOne(id);
    }
    update(id, updateUserCourseDto) {
        return this.userCourseService.update(id, updateUserCourseDto);
    }
    remove(id) {
        return this.userCourseService.remove(id);
    }
};
exports.UserCourseController = UserCourseController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una asignacion usuario-curso' }),
    (0, swagger_1.ApiBody)({ type: create_user_course_dto_1.CreateUserCourseDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Asignacion usuario-curso creada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de entrada invalidos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_course_dto_1.CreateUserCourseDto]),
    __metadata("design:returntype", void 0)
], UserCourseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las asignaciones usuario-curso' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de asignaciones usuario-curso' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserCourseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una asignacion usuario-curso por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Asignacion usuario-curso encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Asignacion usuario-curso no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserCourseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una asignacion usuario-curso' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiBody)({ type: update_user_course_dto_1.UpdateUserCourseDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Asignacion usuario-curso actualizada' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Asignacion usuario-curso no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_course_dto_1.UpdateUserCourseDto]),
    __metadata("design:returntype", void 0)
], UserCourseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una asignacion usuario-curso' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Asignacion usuario-curso eliminada' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Asignacion usuario-curso no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserCourseController.prototype, "remove", null);
exports.UserCourseController = UserCourseController = __decorate([
    (0, swagger_1.ApiTags)('User-Courses'),
    (0, common_1.Controller)('user-course'),
    __metadata("design:paramtypes", [user_course_service_1.UserCourseService])
], UserCourseController);
//# sourceMappingURL=user-course.controller.js.map