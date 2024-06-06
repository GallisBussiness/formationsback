import { Injectable } from '@nestjs/common';
import { CreateConsultantDto } from './dto/create-consultant.dto';
import { UpdateConsultantDto } from './dto/update-consultant.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Consultant, ConsultantDocument } from './entities/consultant.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ConsultantService extends AbstractModel<Consultant,CreateConsultantDto,UpdateConsultantDto>{
  constructor(@InjectModel(Consultant.name) private readonly consultantModel: Model<ConsultantDocument>){
    super(consultantModel);
  }
}
