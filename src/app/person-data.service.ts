import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})

export class PersonDataService {
  people: Person[] = [];

  constructor() { }

  addPerson(person: Person): PersonDataService {
    this.people.push(person);
    return this;
  }

  getAllPeople(): Person[] {
    return this.people;
  }

}
