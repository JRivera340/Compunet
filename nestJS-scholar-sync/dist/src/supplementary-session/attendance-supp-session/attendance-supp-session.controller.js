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
exports.AttendanceSuppSessionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const attendance_supp_session_service_1 = require("./attendance-supp-session.service");
const create_attendance_supp_session_dto_1 = require("./dto/create-attendance-supp-session.dto");
const update_attendance_supp_session_dto_1 = require("./dto/update-attendance-supp-session.dto");
let AttendanceSuppSessionController = class AttendanceSuppSessionController {
    attendanceSuppSessionService;
    constructor(attendanceSuppSessionService) {
        this.attendanceSuppSessionService = attendanceSuppSessionService;
    }
    create(createAttendanceSuppSessionDto) {
        return this.attendanceSuppSessionService.create(createAttendanceSuppSessionDto);
    }
    findAll() {
        return this.attendanceSuppSessionService.findAll();
    }
    findOne(id) {
        return this.attendanceSuppSessionService.findOne(id);
    }
    update(id, updateAttendanceSuppSessionDto) {
        return this.attendanceSuppSessionService.update(id, updateAttendanceSuppSessionDto);
    }
    remove(id) {
        return this.attendanceSuppSessionService.remove(id);
    }
};
exports.AttendanceSuppSessionController = AttendanceSuppSessionController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un registro de asistencia de sesion suplementaria' }),
    (0, swagger_1.ApiBody)({ type: create_attendance_supp_session_dto_1.CreateAttendanceSuppSessionDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Registro de asistencia creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de entrada invalidos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_attendance_supp_session_dto_1.CreateAttendanceSuppSessionDto]),
    __metadata("design:returntype", void 0)
], AttendanceSuppSessionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los registros de asistencia de sesiones suplementarias' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de registros de asistencia' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttendanceSuppSessionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un registro de asistencia por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registro de asistencia encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Registro de asistencia no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AttendanceSuppSessionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un registro de asistencia' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiBody)({ type: update_attendance_supp_session_dto_1.UpdateAttendanceSuppSessionDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registro de asistencia actualizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Registro de asistencia no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_attendance_supp_session_dto_1.UpdateAttendanceSuppSessionDto]),
    __metadata("design:returntype", void 0)
], AttendanceSuppSessionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un registro de asistencia' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registro de asistencia eliminado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Registro de asistencia no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AttendanceSuppSessionController.prototype, "remove", null);
exports.AttendanceSuppSessionController = AttendanceSuppSessionController = __decorate([
    (0, swagger_1.ApiTags)('Attendance-Supp-Sessions'),
    (0, common_1.Controller)('attendance-supp-session'),
    __metadata("design:paramtypes", [attendance_supp_session_service_1.AttendanceSuppSessionService])
], AttendanceSuppSessionController);
//# sourceMappingURL=attendance-supp-session.controller.js.map