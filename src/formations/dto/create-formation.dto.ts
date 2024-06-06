import { IsArray, IsDateString, IsMongoId, IsNotEmpty, IsString } from "class-validator";

export class CreateFormationDto {

    _id: string;

    @IsNotEmpty()
    @IsString()
    nom: string;

    @IsNotEmpty()
    @IsDateString()
    debut: string;

    @IsNotEmpty()
    @IsDateString()
    fin: string;

    @IsNotEmpty()
    @IsMongoId()
    consultant: string;

    @IsArray()
    participants: string[];
}
