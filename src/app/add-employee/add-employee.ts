

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.html',
  styleUrls: ['./add-employee.css']
})
export class AddEmployee {

  employee: Employee = {
    name: '',
    department: '',
    email: '',
    salary: 0
  };

  addEmployee() {
    console.log(this.employee);
  }
}
