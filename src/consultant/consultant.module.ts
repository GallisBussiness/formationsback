import { Module } from '@nestjs/common';
import { ConsultantService } from './consultant.service';
import { ConsultantController } from './consultant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Consultant, ConsultantSchema } from './entities/consultant.entity';

@Module({
  imports:[MongooseModule.forFeature([{name: Consultant.name,schema: ConsultantSchema}])],
  controllers: [ConsultantController],
  providers: [ConsultantService],
})
export class ConsultantModule {}
