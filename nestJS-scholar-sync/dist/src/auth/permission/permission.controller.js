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
exports.PermissionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("@nestjs/passport/dist/auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const permission_service_1 = require("./permission.service");
const create_permission_dto_1 = require("./dto/create-permission.dto");
const update_permission_dto_1 = require("./dto/update-permission.dto");
let PermissionController = class PermissionController {
    permissionService;
    constructor(permissionService) {
        this.permissionService = permissionService;
    }
    create(createPermissionDto) {
        return this.permissionService.create(createPermissionDto);
    }
    findAll() {
        return this.permissionService.findAll();
    }
    findOne(id) {
        return this.permissionService.findOne(id);
    }
    update(id, updatePermissionDto) {
        return this.permissionService.update(id, updatePermissionDto);
    }
    remove(id) {
        return this.permissionService.remove(id);
    }
};
exports.PermissionController = PermissionController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo permiso (solo Admin)' }),
    (0, swagger_1.ApiBody)({ type: create_permission_dto_1.CreatePermissionDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Permiso creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de entrada invalidos' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Sin permisos (requiere rol Admin)' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_permission_dto_1.CreatePermissionDto]),
    __metadata("design:returntype", void 0)
], PermissionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los permisos (solo Admin)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de permisos' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Sin permisos (requiere rol Admin)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PermissionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un permiso por ID (solo Admin)' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Permiso encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Sin permisos (requiere rol Admin)' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Permiso no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PermissionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un permiso (solo Admin)' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiBody)({ type: update_permission_dto_1.UpdatePermissionDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Permiso actualizado' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Sin permisos (requiere rol Admin)' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Permiso no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_permission_dto_1.UpdatePermissionDto]),
    __metadata("design:returntype", void 0)
], PermissionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un permiso (solo Admin)' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Permiso eliminado' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Sin permisos (requiere rol Admin)' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Permiso no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PermissionController.prototype, "remove", null);
exports.PermissionController = PermissionController = __decorate([
    (0, swagger_1.ApiTags)('Permissions'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('permission'),
    (0, common_1.UseGuards)((0, auth_guard_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('Admin'),
    __metadata("design:paramtypes", [permission_service_1.PermissionService])
], PermissionController);
//# sourceMappingURL=permission.controller.js.map