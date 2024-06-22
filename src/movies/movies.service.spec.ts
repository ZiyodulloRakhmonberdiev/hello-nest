import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("should be 0", () => {
    expect(5-4).toEqual(1);
  })

  describe('testing getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('testing getOne', () => {
    it('should return a movie', () => {
      service.create({
        title: 'Test Movie',
        year: 2000,
        genres: ['test'],
      })
      const result = service.getOne(1);
      expect(result).toBeDefined();
      // expect(result.id).toEqual(1);
    });

    it('should return 404 page', () => {
      try{
        service.getOne(89)
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException)
        // expect(e.message).toEqual("Movie with ID 89 not found.")
      }
    })
  });
});
