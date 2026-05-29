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
exports.ExperienceBadgeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const experience_badge_service_1 = require("./experience-badge.service");
const create_experience_badge_dto_1 = require("./dto/create-experience-badge.dto");
const update_experience_badge_dto_1 = require("./dto/update-experience-badge.dto");
let ExperienceBadgeController = class ExperienceBadgeController {
    experienceBadgeService;
    constructor(experienceBadgeService) {
        this.experienceBadgeService = experienceBadgeService;
    }
    create(createExperienceBadgeDto) {
        return this.experienceBadgeService.create(createExperienceBadgeDto);
    }
    findAll() {
        return this.experienceBadgeService.findAll();
    }
    findOne(id) {
        return this.experienceBadgeService.findOne(id);
    }
    update(id, updateExperienceBadgeDto) {
        return this.experienceBadgeService.update(id, updateExperienceBadgeDto);
    }
    remove(id) {
        return this.experienceBadgeService.remove(id);
    }
};
exports.ExperienceBadgeController = ExperienceBadgeController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo experience badge' }),
    (0, swagger_1.ApiBody)({ type: create_experience_badge_dto_1.CreateExperienceBadgeDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Experience badge creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de entrada invalidos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_experience_badge_dto_1.CreateExperienceBadgeDto]),
    __metadata("design:returntype", void 0)
], ExperienceBadgeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los experience badges' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de experience badges' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExperienceBadgeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un experience badge por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Experience badge encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Experience badge no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExperienceBadgeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un experience badge' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiBody)({ type: update_experience_badge_dto_1.UpdateExperienceBadgeDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Experience badge actualizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Experience badge no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_experience_badge_dto_1.UpdateExperienceBadgeDto]),
    __metadata("design:returntype", void 0)
], ExperienceBadgeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un experience badge' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Experience badge eliminado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Experience badge no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExperienceBadgeController.prototype, "remove", null);
exports.ExperienceBadgeController = ExperienceBadgeController = __decorate([
    (0, swagger_1.ApiTags)('Experience-Badges'),
    (0, common_1.Controller)('experience-badge'),
    __metadata("design:paramtypes", [experience_badge_service_1.ExperienceBadgeService])
], ExperienceBadgeController);
//# sourceMappingURL=experience-badge.controller.js.map