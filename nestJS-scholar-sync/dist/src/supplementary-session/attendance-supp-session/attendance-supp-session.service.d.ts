import { Repository } from 'typeorm';
import { User } from "../../auth/user/entities/user.entity";
import { SupplementarySession } from "../supplementary-sessions/entities/supplementary-session.entity";
import { AttendanceSuppSession } from './entities/attendance-supp-session.entity';
import { CreateAttendanceSuppSessionDto } from './dto/create-attendance-supp-session.dto';
import { UpdateAttendanceSuppSessionDto } from './dto/update-attendance-supp-session.dto';
export declare class AttendanceSuppSessionService {
    private readonly attendanceSuppSessionRepository;
    private readonly userRepository;
    private readonly supplementarySessionRepository;
    constructor(attendanceSuppSessionRepository: Repository<AttendanceSuppSession>, userRepository: Repository<User>, supplementarySessionRepository: Repository<SupplementarySession>);
    create(createAttendanceSuppSessionDto: CreateAttendanceSuppSessionDto): Promise<AttendanceSuppSession>;
    findAll(): Promise<AttendanceSuppSession[]>;
    findOne(id: number): Promise<AttendanceSuppSession>;
    update(id: number, updateAttendanceSuppSessionDto: UpdateAttendanceSuppSessionDto): Promise<AttendanceSuppSession>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
