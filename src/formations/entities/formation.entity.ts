import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Consultant } from "src/consultant/entities/consultant.entity";
import { Participant } from "src/participant/entities/participant.entity";

export type FormationDocument = HydratedDocument<Formation>;

@Schema({timestamps: true})
export class Formation {

    _id: string;

    @Prop({type: String,required: true})
    nom: string;

    @Prop({type: Date, required: true})
    debut: Date;

    @Prop({type: Date,required: true})
    fin: Date;

    @Prop({type: Types.ObjectId,ref: Consultant.name,required: true,autopopulate: true})
    consultant: Consultant;

    @Prop( {type : [{type : Types.ObjectId,ref: Participant.name,autopopulate: true}], required: true} )
    participants: Participant[];
}

export const FormationSchema = SchemaFactory.createForClass(Formation);