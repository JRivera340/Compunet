import { User } from "../../../auth/user/entities/user.entity";
import { SupplementarySession } from "../../supplementary-sessions/entities/supplementary-session.entity";
export declare class AttendanceSuppSession {
    id: number;
    ta: User;
    student: User;
    supplementarySession: SupplementarySession;
    attendanceNotes: string;
    additionalHomework?: string;
}
