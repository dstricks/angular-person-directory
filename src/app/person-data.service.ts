import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})

export class PersonDataService {
  idIndex: number = 0;
  people: Person[] = [];

  constructor() { }

  addPerson(person: Person): PersonDataService {
    if (!person.id) {
      person.id = ++this.idIndex;
    }
    this.people.push(person);
    return this;
  }

  deletePersonById(id: number): PersonDataService {
    this.people = this.people.filter(person => person.id !== id);
    return this;
  }

  getAllPeople(): Person[] {
    return this.people;
  }

}
