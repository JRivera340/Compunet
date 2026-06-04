"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceSuppSessionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const attendance_supp_session_service_1 = require("./attendance-supp-session.service");
const attendance_supp_session_entity_1 = require("./entities/attendance-supp-session.entity");
const user_entity_1 = require("../../auth/user/entities/user.entity");
const supplementary_session_entity_1 = require("../supplementary-sessions/entities/supplementary-session.entity");
let AttendanceSuppSessionModule = class AttendanceSuppSessionModule {
};
exports.AttendanceSuppSessionModule = AttendanceSuppSessionModule;
exports.AttendanceSuppSessionModule = AttendanceSuppSessionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([attendance_supp_session_entity_1.AttendanceSuppSession, user_entity_1.User, supplementary_session_entity_1.SupplementarySession])],
        providers: [attendance_supp_session_service_1.AttendanceSuppSessionService],
    })
], AttendanceSuppSessionModule);
//# sourceMappingURL=attendance-supp-session.module.js.map