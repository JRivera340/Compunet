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
exports.SupplementarySession = void 0;
const typeorm_1 = require("typeorm");
const attendance_supp_session_entity_1 = require("../../attendance-supp-session/entities/attendance-supp-session.entity");
let SupplementarySession = class SupplementarySession {
    id;
    requestedDate;
    completed;
    topic;
    virtual;
    attendanceRecords;
};
exports.SupplementarySession = SupplementarySession;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SupplementarySession.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'requested_date', type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], SupplementarySession.prototype, "requestedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], SupplementarySession.prototype, "completed", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 100 }),
    __metadata("design:type", String)
], SupplementarySession.prototype, "topic", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Boolean)
], SupplementarySession.prototype, "virtual", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => attendance_supp_session_entity_1.AttendanceSuppSession, (attendance) => attendance.supplementarySession),
    __metadata("design:type", Array)
], SupplementarySession.prototype, "attendanceRecords", void 0);
exports.SupplementarySession = SupplementarySession = __decorate([
    (0, typeorm_1.Entity)('supplementary_sessions')
], SupplementarySession);
//# sourceMappingURL=supplementary-session.entity.js.map