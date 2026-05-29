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
exports.ReplyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const reply_service_1 = require("./reply.service");
const create_reply_dto_1 = require("./dto/create-reply.dto");
const update_reply_dto_1 = require("./dto/update-reply.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const create_role_dto_1 = require("../../auth/role/dto/create-role.dto");
let ReplyController = class ReplyController {
    replyService;
    constructor(replyService) {
        this.replyService = replyService;
    }
    create(createReplyDto) {
        return this.replyService.create(createReplyDto);
    }
    findAll() {
        return this.replyService.findAll();
    }
    findOne(id) {
        return this.replyService.findOne(id);
    }
    update(id, updateReplyDto) {
        return this.replyService.update(id, updateReplyDto);
    }
    remove(id) {
        return this.replyService.remove(id);
    }
    like(id) {
        return this.replyService.like(id);
    }
    validate(id) {
        return this.replyService.validate(id);
    }
};
exports.ReplyController = ReplyController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva respuesta' }),
    (0, swagger_1.ApiBody)({ type: create_reply_dto_1.CreateReplyDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Respuesta creada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de entrada invalidos' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reply_dto_1.CreateReplyDto]),
    __metadata("design:returntype", void 0)
], ReplyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las respuestas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de respuestas' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReplyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una respuesta por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Respuesta encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Respuesta no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReplyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una respuesta' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiBody)({ type: update_reply_dto_1.UpdateReplyDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Respuesta actualizada' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Respuesta no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_reply_dto_1.UpdateReplyDto]),
    __metadata("design:returntype", void 0)
], ReplyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una respuesta' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Respuesta eliminada' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Respuesta no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReplyController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/like'),
    (0, swagger_1.ApiOperation)({ summary: 'Dar like a una respuesta' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Like aplicado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Respuesta no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReplyController.prototype, "like", null);
__decorate([
    (0, common_1.Patch)(':id/validate'),
    (0, roles_decorator_1.Roles)(create_role_dto_1.RoleNames.PROFESSOR, create_role_dto_1.RoleNames.TA),
    (0, swagger_1.ApiOperation)({ summary: 'Validar una respuesta (solo Professor o TA)' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Respuesta validada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Sin permisos (requiere Professor o TA)' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Respuesta no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReplyController.prototype, "validate", null);
exports.ReplyController = ReplyController = __decorate([
    (0, swagger_1.ApiTags)('Replies'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('reply'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [reply_service_1.ReplyService])
], ReplyController);
//# sourceMappingURL=reply.controller.js.map