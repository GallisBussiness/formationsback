import { Injectable } from '@nestjs/common';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Formation, FormationDocument } from './entities/formation.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FormationsService extends AbstractModel<Formation,CreateFormationDto,UpdateFormationDto>{
 constructor(@InjectModel(Formation.name) private readonly formationModel: Model<FormationDocument>) {
  super(formationModel);
 } 
}
