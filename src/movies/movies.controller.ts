import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  
  @Get()
  getAll(){
    return "this will return all the movies"
  }

  @Get('/:id')
  getOne(@Param('id') id: string){
    return `this will return one movie with id: ${id}`;
  }

  @Post()
  create(){
    return 'this will create a movie'
  }

  @Delete('/:id')
  delete(@Param('id') id: string){
    return `this will delete a movie with id: ${id}`;
  }

  @Patch('/:id')
  patch(@Param('id') id: string){
    return `this will update a movie with id: ${id}`;
  }
}
