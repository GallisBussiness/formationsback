import { IsEnum, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export enum CIVILITE {
    M = "M.",
    MME = "Mme",
    MLE = "Mlle",
}

export class CreateParticipantDto {

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

    @IsNotEmpty()
    @IsString()
    fonction: string;
}
