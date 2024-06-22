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

  it('should be 0', () => {
    expect(5 - 4).toEqual(1);
  });

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
      });
      const result = service.getOne(1);
      expect(result).toBeDefined();
      // expect(result.id).toEqual(1);
    });

    it('should return 404 page', () => {
      try {
        service.getOne(89);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        // expect(e.message).toEqual("Movie with ID 89 not found.")
      }
    });
  });
  describe('testing remove', () => {
    it('should remove a movie', () => {
      service.create({
        title: 'Test Movie',
        year: 2000,
        genres: ['test'],
      });
      const allMovies = service.getAll().length;
      service.remove(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(allMovies);
      // service.remove(1);
      // const result = service.getOne(1);
      // expect(result).toBeUndefined();
    });
    it('should return 404 page', () => {
      try {
        service.remove(89);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
  describe('testing create', () => {
    it("should create a movie", () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: 'Test Movie',
        year: 2000,
        genres: ['test'],
      });
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    })
  })
  describe('testing patch', () => {
    it('should update a movie', () => {
      service.create({
        title: 'Test Movie',
        year: 2000,
        genres: ['test'],
      });
      service.patch(1, { title: 'Updated Title' });
      const movie = service.getOne(1);
      expect(movie.title).toEqual('Updated Title'); 
    })
    it('should return 404 page', () => {
      try {
        service.patch(89, {});
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  })
});
