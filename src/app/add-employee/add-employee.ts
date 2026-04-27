import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee';
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

  constructor(
    private service: EmployeeService,
    private router: Router
  ) {}

  addEmployee() {
    this.service.add(this.employee).subscribe({
      next: (response) => {
        console.log('SERVER RESPONSE:', response); // 🔥 IMPORTANT

        alert('Employee Added Successfully');

        this.router.navigate(['/employees']);
      },
      error: (err) => {
        console.error('ERROR:', err);
      }
    });
  }
}