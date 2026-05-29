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
exports.SupplementarySessionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const supplementary_sessions_service_1 = require("./supplementary-sessions.service");
const create_supplementary_session_dto_1 = require("./dto/create-supplementary-session.dto");
const update_supplementary_session_dto_1 = require("./dto/update-supplementary-session.dto");
let SupplementarySessionsController = class SupplementarySessionsController {
    supplementarySessionsService;
    constructor(supplementarySessionsService) {
        this.supplementarySessionsService = supplementarySessionsService;
    }
    create(createSupplementarySessionDto) {
        return this.supplementarySessionsService.create(createSupplementarySessionDto);
    }
    findAll() {
        return this.supplementarySessionsService.findAll();
    }
    findOne(id) {
        return this.supplementarySessionsService.findOne(id);
    }
    update(id, updateSupplementarySessionDto) {
        return this.supplementarySessionsService.update(id, updateSupplementarySessionDto);
    }
    remove(id) {
        return this.supplementarySessionsService.remove(id);
    }
};
exports.SupplementarySessionsController = SupplementarySessionsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una sesion suplementaria' }),
    (0, swagger_1.ApiBody)({ type: create_supplementary_session_dto_1.CreateSupplementarySessionDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Sesion suplementaria creada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de entrada invalidos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_supplementary_session_dto_1.CreateSupplementarySessionDto]),
    __metadata("design:returntype", void 0)
], SupplementarySessionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las sesiones suplementarias' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de sesiones suplementarias' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SupplementarySessionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una sesion suplementaria por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sesion suplementaria encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Sesion suplementaria no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SupplementarySessionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una sesion suplementaria' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiBody)({ type: update_supplementary_session_dto_1.UpdateSupplementarySessionDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sesion suplementaria actualizada' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Sesion suplementaria no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_supplementary_session_dto_1.UpdateSupplementarySessionDto]),
    __metadata("design:returntype", void 0)
], SupplementarySessionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una sesion suplementaria' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sesion suplementaria eliminada' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Sesion suplementaria no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SupplementarySessionsController.prototype, "remove", null);
exports.SupplementarySessionsController = SupplementarySessionsController = __decorate([
    (0, swagger_1.ApiTags)('Supplementary-Sessions'),
    (0, common_1.Controller)('supplementary-sessions'),
    __metadata("design:paramtypes", [supplementary_sessions_service_1.SupplementarySessionsService])
], SupplementarySessionsController);
//# sourceMappingURL=supplementary-sessions.controller.js.map