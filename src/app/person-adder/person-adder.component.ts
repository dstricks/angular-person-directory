import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PersonDataService} from '../person-data.service'

@Component({
  selector: 'app-person-adder',
  templateUrl: './person-adder.component.html',
  styleUrls: ['./person-adder.component.css']
})
export class PersonAdderComponent implements OnInit {

personForm: FormGroup;
submitted = false;

  constructor(private formBuilder: FormBuilder,
              private personDataService: PersonDataService) {
    this.personForm = this.formBuilder.group({
      title: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required]
    });
  }


  onSubmit() {
    this.submitted = true;

    if(this.personForm.invalid) {
      return;
    }

    this.personDataService.addPerson(this.personForm.value);
    this.submitted = false;
    this.personForm.reset();
  }

  ngOnInit() {
  }

}
