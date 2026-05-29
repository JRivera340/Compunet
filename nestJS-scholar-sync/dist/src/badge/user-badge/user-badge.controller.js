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
exports.UserBadgeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_badge_service_1 = require("./user-badge.service");
const create_user_badge_dto_1 = require("./dto/create-user-badge.dto");
const update_user_badge_dto_1 = require("./dto/update-user-badge.dto");
let UserBadgeController = class UserBadgeController {
    userBadgeService;
    constructor(userBadgeService) {
        this.userBadgeService = userBadgeService;
    }
    create(createUserBadgeDto) {
        return this.userBadgeService.create(createUserBadgeDto);
    }
    findAll() {
        return this.userBadgeService.findAll();
    }
    findOne(id) {
        return this.userBadgeService.findOne(id);
    }
    update(id, updateUserBadgeDto) {
        return this.userBadgeService.update(id, updateUserBadgeDto);
    }
    remove(id) {
        return this.userBadgeService.remove(id);
    }
};
exports.UserBadgeController = UserBadgeController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una asignacion user badge' }),
    (0, swagger_1.ApiBody)({ type: create_user_badge_dto_1.CreateUserBadgeDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User badge creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de entrada invalidos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_badge_dto_1.CreateUserBadgeDto]),
    __metadata("design:returntype", void 0)
], UserBadgeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los user badges' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de user badges' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserBadgeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un user badge por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User badge encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User badge no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserBadgeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un user badge' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiBody)({ type: update_user_badge_dto_1.UpdateUserBadgeDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User badge actualizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User badge no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_badge_dto_1.UpdateUserBadgeDto]),
    __metadata("design:returntype", void 0)
], UserBadgeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un user badge' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User badge eliminado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User badge no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserBadgeController.prototype, "remove", null);
exports.UserBadgeController = UserBadgeController = __decorate([
    (0, swagger_1.ApiTags)('User-Badges'),
    (0, common_1.Controller)('user-badge'),
    __metadata("design:paramtypes", [user_badge_service_1.UserBadgeService])
], UserBadgeController);
//# sourceMappingURL=user-badge.controller.js.map