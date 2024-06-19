import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  
  @Get()
  getAll(){
    return "this will return all the movies"
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `You are searching for: ${searchingYear}`; 
  }

  @Get(':id')
  getOne(@Param('id') id: string){
    return `this will return one movie with id: ${id}`;
  }

  @Post()
  create(@Body() movieData){
    console.log(movieData);
    return movieData
  }

  @Delete(':id')
  delete(@Param('id') id: string){
    return `this will delete a movie with id: ${id}`;
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() updateData){
    return {
      updateMovie: id,
      ...updateData
    }
  }


}
