import { SupplementarySessionsService } from './supplementary-sessions.service';
import { CreateSupplementarySessionDto } from './dto/create-supplementary-session.dto';
import { UpdateSupplementarySessionDto } from './dto/update-supplementary-session.dto';
export declare class SupplementarySessionsController {
    private readonly supplementarySessionsService;
    constructor(supplementarySessionsService: SupplementarySessionsService);
    create(createSupplementarySessionDto: CreateSupplementarySessionDto): Promise<import("./entities/supplementary-session.entity").SupplementarySession>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<import("./entities/supplementary-session.entity").SupplementarySession>;
    update(id: number, updateSupplementarySessionDto: UpdateSupplementarySessionDto): Promise<import("./entities/supplementary-session.entity").SupplementarySession>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
