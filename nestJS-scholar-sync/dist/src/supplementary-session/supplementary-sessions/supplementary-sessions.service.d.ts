import { Repository } from 'typeorm';
import { CreateSupplementarySessionDto } from './dto/create-supplementary-session.dto';
import { UpdateSupplementarySessionDto } from './dto/update-supplementary-session.dto';
import { SupplementarySession } from './entities/supplementary-session.entity';
export declare class SupplementarySessionsService {
    private readonly supplementarySessionRepository;
    constructor(supplementarySessionRepository: Repository<SupplementarySession>);
    create(createSupplementarySessionDto: CreateSupplementarySessionDto): Promise<SupplementarySession>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<SupplementarySession>;
    update(id: number, updateSupplementarySessionDto: UpdateSupplementarySessionDto): Promise<SupplementarySession>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
