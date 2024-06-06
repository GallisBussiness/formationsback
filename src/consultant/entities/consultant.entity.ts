import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { CIVILITE } from "src/participant/dto/create-participant.dto";

export type ConsultantDocument = HydratedDocument<Consultant>;

@Schema({timestamps: true})
export class Consultant {
    _id: string;

    @Prop({type: String, enum:CIVILITE,required: true})
    civilite: string;

    @Prop({type: String,required: true})
    prenom: string;

    @Prop({type: String,required: true})
    nom: string;

    @Prop({type: String})
    contact: string;

    @Prop({type: String})
    nom_cabinet: string;
}


export const ConsultantSchema = SchemaFactory.createForClass(Consultant);