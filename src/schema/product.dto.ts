import {
	IsNotEmpty,
	IsNumber,
	IsString,
    Max,
    Min,
    IsAlpha
} from 'class-validator';

export class ProductDtos {
    @IsAlpha()
    @IsNotEmpty()
	@IsString()
    name: string;

    @IsNotEmpty()
	@IsString()
    manufacturer: string;

    @IsNotEmpty()
	@IsNumber()
    @Min(1999)
    @Max(2023)
    manufactureYear: number;
}
