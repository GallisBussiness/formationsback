import { IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { CIVILITE } from "src/participant/dto/create-participant.dto";

export class CreateConsultantDto {

    @IsNotEmpty()
    @IsEnum(CIVILITE)
    civilite: string;

    @IsNotEmpty()
    @IsString()
    prenom: string;

    @IsNotEmpty()
    @IsString()
    nom: string;

    @IsNotEmpty()
    @IsPhoneNumber('SN')
    contact: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    nom_cabinet: string;
}
