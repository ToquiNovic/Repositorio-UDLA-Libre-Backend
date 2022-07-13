import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { DocenteService } from './Docente.service';
@Controller('Docente')
export class DocenteController {

    constructor(private readonly DocenteService: DocenteService) { }
  
    @Get('/all')
  async getAll() {
    return await this.DocenteService.getAll()
  }

}
