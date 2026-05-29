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
exports.SupplementarySessionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const supplementary_session_entity_1 = require("./entities/supplementary-session.entity");
let SupplementarySessionsService = class SupplementarySessionsService {
    supplementarySessionRepository;
    constructor(supplementarySessionRepository) {
        this.supplementarySessionRepository = supplementarySessionRepository;
    }
    async create(createSupplementarySessionDto) {
        const supplementarySession = this.supplementarySessionRepository.create(createSupplementarySessionDto);
        return this.supplementarySessionRepository.save(supplementarySession);
    }
    async findAll() {
        const sessions = await this.supplementarySessionRepository.find({
            relations: ['attendanceRecords', 'attendanceRecords.student', 'attendanceRecords.ta'],
        });
        return sessions.map((session) => ({
            id: session.id,
            requestedDate: session.requestedDate,
            completed: session.completed,
            topic: session.topic,
            virtual: session.virtual,
            attendees: session.attendanceRecords.map((attendance) => ({
                student: {
                    id: attendance.student.id,
                    firstName: attendance.student.firstName,
                    lastName: attendance.student.lastName,
                },
                ta: {
                    id: attendance.ta.id,
                    firstName: attendance.ta.firstName,
                    lastName: attendance.ta.lastName,
                },
                attendanceNotes: attendance.attendanceNotes,
                additionalHomework: attendance.additionalHomework,
            })),
        }));
    }
    async findOne(id) {
        const supplementarySession = await this.supplementarySessionRepository.findOne({
            where: { id },
            relations: ['attendanceRecords'],
        });
        if (!supplementarySession) {
            throw new common_1.NotFoundException(`Supplementary session with id ${id} not found`);
        }
        return supplementarySession;
    }
    async update(id, updateSupplementarySessionDto) {
        const supplementarySession = await this.findOne(id);
        Object.assign(supplementarySession, updateSupplementarySessionDto);
        return this.supplementarySessionRepository.save(supplementarySession);
    }
    async remove(id) {
        const supplementarySession = await this.findOne(id);
        await this.supplementarySessionRepository.remove(supplementarySession);
        return { message: `Supplementary session with id ${id} has been removed` };
    }
};
exports.SupplementarySessionsService = SupplementarySessionsService;
exports.SupplementarySessionsService = SupplementarySessionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(supplementary_session_entity_1.SupplementarySession)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SupplementarySessionsService);
//# sourceMappingURL=supplementary-sessions.service.js.map