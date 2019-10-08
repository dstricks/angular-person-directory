import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  person: Person = {
    title: "Manager",
    fname: "John",
    lname: "Smith"
  }
  
  people: Array<Person> = [this.person]

  constructor() { }

  ngOnInit() {
  }

}
