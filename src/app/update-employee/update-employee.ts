import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.html',
  styleUrls: ['./update-employee.css']
})
export class UpdateEmployee {

  employee: Employee = {
    id: 0,
    name: '',
    department: '',
    email: '',
    salary: 0
  };

  updateEmployee() {
    console.log('Updated:', this.employee);
  }

}