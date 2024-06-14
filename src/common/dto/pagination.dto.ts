import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
    @IsOptional()
    @IsPositive()
    @Type(() => Number) // Convert string to number
    limit?: number

    @IsOptional()
    @Min(0)
    @Type(() => Number)
    offset?: number
}