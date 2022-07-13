import { Module } from '@nestjs/common';
import { Neo4jProvider } from 'src/common/neo4j.provider';
import { FacultadController } from './Facultad.controller';
import { FacultadService } from './Facultad.service';

@Module({
  imports:[
    
  ],
  controllers: [FacultadController],
  providers: [FacultadService, Neo4jProvider]
})
export class FacultadModule {}
