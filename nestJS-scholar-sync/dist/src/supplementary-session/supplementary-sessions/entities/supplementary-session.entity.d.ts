import { AttendanceSuppSession } from "../../attendance-supp-session/entities/attendance-supp-session.entity";
export declare class SupplementarySession {
    id: number;
    requestedDate: Date;
    completed?: boolean;
    topic: string;
    virtual: boolean;
    attendanceRecords: AttendanceSuppSession[];
}
