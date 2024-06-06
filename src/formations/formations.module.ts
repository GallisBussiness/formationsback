import { Module } from '@nestjs/common';
import { FormationsService } from './formations.service';
import { FormationsController } from './formations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Formation, FormationSchema } from './entities/formation.entity';

@Module({
  imports:[MongooseModule.forFeatureAsync([{name:Formation.name,useFactory: () => {
    const schema = FormationSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [FormationsController],
  providers: [FormationsService],
})
export class FormationsModule {}
