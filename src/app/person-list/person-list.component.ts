import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonDataService} from '../person-data.service'

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  people: Array<Person> = []

  constructor(private personDataService: PersonDataService) { }

  ngOnInit() {
    this.people = this.personDataService.getAllPeople();
  }

}
