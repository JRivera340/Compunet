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
exports.AttendanceSuppSessionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../auth/user/entities/user.entity");
const supplementary_session_entity_1 = require("../supplementary-sessions/entities/supplementary-session.entity");
const attendance_supp_session_entity_1 = require("./entities/attendance-supp-session.entity");
let AttendanceSuppSessionService = class AttendanceSuppSessionService {
    attendanceSuppSessionRepository;
    userRepository;
    supplementarySessionRepository;
    constructor(attendanceSuppSessionRepository, userRepository, supplementarySessionRepository) {
        this.attendanceSuppSessionRepository = attendanceSuppSessionRepository;
        this.userRepository = userRepository;
        this.supplementarySessionRepository = supplementarySessionRepository;
    }
    async create(createAttendanceSuppSessionDto) {
        const { taId, studentId, supplementarySessionId, attendanceNotes, additionalHomework } = createAttendanceSuppSessionDto;
        const ta = await this.userRepository.findOne({ where: { id: taId } });
        if (!ta) {
            throw new common_1.NotFoundException(`TA with id ${taId} not found`);
        }
        const student = await this.userRepository.findOne({ where: { id: studentId } });
        if (!student) {
            throw new common_1.NotFoundException(`Student with id ${studentId} not found`);
        }
        const supplementarySession = await this.supplementarySessionRepository.findOne({
            where: { id: supplementarySessionId },
        });
        if (!supplementarySession) {
            throw new common_1.NotFoundException(`Supplementary session with id ${supplementarySessionId} not found`);
        }
        const existingAttendance = await this.attendanceSuppSessionRepository.findOne({
            where: {
                ta: { id: ta.id },
                student: { id: student.id },
                supplementarySession: { id: supplementarySession.id },
            },
        });
        if (existingAttendance) {
            throw new common_1.ConflictException(`Attendance already exists for TA ${ta.id}, student ${student.id} and supplementary session ${supplementarySession.id}`);
        }
        const attendance = this.attendanceSuppSessionRepository.create({
            ta,
            student,
            supplementarySession,
            attendanceNotes,
            additionalHomework,
        });
        return this.attendanceSuppSessionRepository.save(attendance);
    }
    async findAll() {
        return this.attendanceSuppSessionRepository.find({
            relations: ['ta', 'student', 'supplementarySession'],
        });
    }
    async findOne(id) {
        const attendance = await this.attendanceSuppSessionRepository.findOne({
            where: { id },
            relations: ['ta', 'student', 'supplementarySession'],
        });
        if (!attendance) {
            throw new common_1.NotFoundException(`Attendance supplementary session with id ${id} not found`);
        }
        return attendance;
    }
    async update(id, updateAttendanceSuppSessionDto) {
        const attendance = await this.findOne(id);
        if (updateAttendanceSuppSessionDto.taId !== undefined) {
            const ta = await this.userRepository.findOne({ where: { id: updateAttendanceSuppSessionDto.taId } });
            if (!ta) {
                throw new common_1.NotFoundException(`TA with id ${updateAttendanceSuppSessionDto.taId} not found`);
            }
            attendance.ta = ta;
        }
        if (updateAttendanceSuppSessionDto.studentId !== undefined) {
            const student = await this.userRepository.findOne({
                where: { id: updateAttendanceSuppSessionDto.studentId },
            });
            if (!student) {
                throw new common_1.NotFoundException(`Student with id ${updateAttendanceSuppSessionDto.studentId} not found`);
            }
            attendance.student = student;
        }
        if (updateAttendanceSuppSessionDto.supplementarySessionId !== undefined) {
            const supplementarySession = await this.supplementarySessionRepository.findOne({
                where: { id: updateAttendanceSuppSessionDto.supplementarySessionId },
            });
            if (!supplementarySession) {
                throw new common_1.NotFoundException(`Supplementary session with id ${updateAttendanceSuppSessionDto.supplementarySessionId} not found`);
            }
            attendance.supplementarySession = supplementarySession;
        }
        if (updateAttendanceSuppSessionDto.attendanceNotes !== undefined) {
            attendance.attendanceNotes = updateAttendanceSuppSessionDto.attendanceNotes;
        }
        if (updateAttendanceSuppSessionDto.additionalHomework !== undefined) {
            attendance.additionalHomework = updateAttendanceSuppSessionDto.additionalHomework;
        }
        const duplicate = await this.attendanceSuppSessionRepository.findOne({
            where: {
                ta: { id: attendance.ta.id },
                student: { id: attendance.student.id },
                supplementarySession: { id: attendance.supplementarySession.id },
            },
        });
        if (duplicate && duplicate.id !== attendance.id) {
            throw new common_1.ConflictException(`Attendance already exists for TA ${attendance.ta.id}, student ${attendance.student.id} and supplementary session ${attendance.supplementarySession.id}`);
        }
        return this.attendanceSuppSessionRepository.save(attendance);
    }
    async remove(id) {
        const attendance = await this.findOne(id);
        await this.attendanceSuppSessionRepository.remove(attendance);
        return { message: `Attendance supplementary session with id ${id} has been removed` };
    }
};
exports.AttendanceSuppSessionService = AttendanceSuppSessionService;
exports.AttendanceSuppSessionService = AttendanceSuppSessionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(attendance_supp_session_entity_1.AttendanceSuppSession)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(supplementary_session_entity_1.SupplementarySession)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AttendanceSuppSessionService);
//# sourceMappingURL=attendance-supp-session.service.js.map