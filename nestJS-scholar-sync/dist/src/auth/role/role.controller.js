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
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const role_service_1 = require("./role.service");
const create_role_dto_1 = require("./dto/create-role.dto");
const update_role_dto_1 = require("./dto/update-role.dto");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const auth_guard_1 = require("@nestjs/passport/dist/auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
let RoleController = class RoleController {
    roleService;
    constructor(roleService) {
        this.roleService = roleService;
    }
    create(createRoleDto) {
        return this.roleService.create(createRoleDto);
    }
    findAll() {
        return this.roleService.findAll();
    }
    findOne(id) {
        return this.roleService.findOne(id);
    }
    update(id, updateRoleDto) {
        return this.roleService.update(id, updateRoleDto);
    }
    remove(id) {
        return this.roleService.remove(id);
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo rol (solo Admin)' }),
    (0, swagger_1.ApiBody)({ type: create_role_dto_1.CreateRoleDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Rol creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de entrada invalidos' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Sin permisos (requiere rol Admin)' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los roles (solo Admin)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de roles' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Sin permisos (requiere rol Admin)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un rol por ID (solo Admin)' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Rol encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Sin permisos (requiere rol Admin)' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Rol no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un rol (solo Admin)' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiBody)({ type: update_role_dto_1.UpdateRoleDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Rol actualizado' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Sin permisos (requiere rol Admin)' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Rol no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_role_dto_1.UpdateRoleDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un rol (solo Admin)' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Rol eliminado' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Sin permisos (requiere rol Admin)' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Rol no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "remove", null);
exports.RoleController = RoleController = __decorate([
    (0, swagger_1.ApiTags)('Roles'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('role'),
    (0, common_1.UseGuards)((0, auth_guard_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('Admin'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
//# sourceMappingURL=role.controller.js.map