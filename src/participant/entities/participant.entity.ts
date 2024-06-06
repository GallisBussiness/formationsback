import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { CIVILITE } from "../dto/create-participant.dto";


export type ParticipantDocument = HydratedDocument<Participant>;

@Schema({timestamps: true})
export class Participant {
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
    fonction: string;
}

export const ParticipantSchema  = SchemaFactory.createForClass(Participant);