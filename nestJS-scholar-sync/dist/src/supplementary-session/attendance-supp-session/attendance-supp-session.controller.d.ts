import { AttendanceSuppSessionService } from './attendance-supp-session.service';
import { CreateAttendanceSuppSessionDto } from './dto/create-attendance-supp-session.dto';
import { UpdateAttendanceSuppSessionDto } from './dto/update-attendance-supp-session.dto';
export declare class AttendanceSuppSessionController {
    private readonly attendanceSuppSessionService;
    constructor(attendanceSuppSessionService: AttendanceSuppSessionService);
    create(createAttendanceSuppSessionDto: CreateAttendanceSuppSessionDto): Promise<import("./entities/attendance-supp-session.entity").AttendanceSuppSession>;
    findAll(): Promise<import("./entities/attendance-supp-session.entity").AttendanceSuppSession[]>;
    findOne(id: number): Promise<import("./entities/attendance-supp-session.entity").AttendanceSuppSession>;
    update(id: number, updateAttendanceSuppSessionDto: UpdateAttendanceSuppSessionDto): Promise<import("./entities/attendance-supp-session.entity").AttendanceSuppSession>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
