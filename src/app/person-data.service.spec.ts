import { TestBed } from '@angular/core/testing';
import { Person } from './person';
import { PersonDataService } from './person-data.service';

describe('PersonDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonDataService = TestBed.get(PersonDataService);
    expect(service).toBeTruthy();
  });

  describe('addPerson()', () => {
    it('should create an id for added people', () => {
      const service: PersonDataService = TestBed.get(PersonDataService);
      let person1 = new Person({fname: "John"});
      service.addPerson(person1);
      expect(service.getAllPeople()[0].id).toBeDefined();
    });

    it('should preserve an existing person id', () => {
      const service: PersonDataService = TestBed.get(PersonDataService);
      let person1 = new Person({fname: "John", id: 99});
      service.addPerson(person1);
      expect(service.getAllPeople()[0].id).toEqual(99);
    });
  });

  describe('deletePersonById()', () => {
    it('should delete a person by id', () => {
      const service: PersonDataService = TestBed.get(PersonDataService);
      let person = new Person({fname: "John"});
      service.addPerson(person);
      let personId = service.getAllPeople()[0].id;
      service.deletePersonById(personId);
      expect(service.getAllPeople()).toEqual([]);
    });
  });

  describe('getAllPeople()', () => {
    it('should return an empty array by default', () => {
      const service: PersonDataService = TestBed.get(PersonDataService);
      expect(service.getAllPeople()).toEqual([]);
    });

    it('should return all people', () => {
      const service: PersonDataService = TestBed.get(PersonDataService);
      let person1 = new Person({title: "Program Manager", fname: "John", lname: "Smith"});
      let person2 = new Person({title: "Software Engineer", fname: "Jason", lname: "Smith"});
      service.addPerson(person1);
      service.addPerson(person2);
      expect(service.getAllPeople()).toEqual([person1, person2]);
    });
  });
});
