import { Module } from '@nestjs/common';
import { Neo4jProvider } from 'src/common/neo4j.provider';
import { DocenteController } from './Docente.controller';
import { DocenteService } from './Docente.service';

@Module({
  imports:[
    
  ],
  controllers: [DocenteController],
  providers: [DocenteService, Neo4jProvider]
})
export class DocenteModule {}
