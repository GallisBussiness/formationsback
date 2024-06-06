import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Participant, ParticipantDocument } from './entities/participant.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ParticipantService extends AbstractModel<Participant,CreateParticipantDto,UpdateParticipantDto>{
  constructor(@InjectModel(Participant.name) private readonly participantModel: Model<ParticipantDocument>){
    super(participantModel);
  }
}
