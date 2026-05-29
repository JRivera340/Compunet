import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class CreatePermissionDto {
    @ApiProperty({ example: 'Create users' })
    @IsString({ message: 'Permission name must be a string' })
    name!: string;

    @ApiProperty({ example: 'Permission to create resources', required: false })
    @IsString({ message: 'Description must be a string' })
    @Length(0, 50, { message: 'Description must be between 0 and 50 characters' })
    @IsOptional()
    description?: string;
}
