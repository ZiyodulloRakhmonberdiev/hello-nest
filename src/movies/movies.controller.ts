import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService){}
  
  @Get()
  getAll(): Movie[]{
    return this.moviesService.getAll();
  }

  // @Get('search')
  // search(@Query('year') searchingYear: string) {
  //   return `You are searching for: ${searchingYear}`; 
  // }

  @Get(':id')
  getOne(@Param('id') id: string): Movie{
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData){
    return this.moviesService.create(movieData)
  }

  @Delete(':id')
  remove(@Param('id') id: string){
    return this.moviesService.remove(id);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() updateData){
    return {
      updateMovie: id,
      ...updateData
    }
  }


}
