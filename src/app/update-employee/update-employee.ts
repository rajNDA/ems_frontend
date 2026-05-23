import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee';
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

  constructor(
    private service: EmployeeService,
    private router: Router
  ) {}

  updateEmployee() {

    // 🔴 Validate ID
    if (!this.employee.id || this.employee.id <= 0) {
      alert('Please enter a valid Employee ID');
      return;
    }

    console.log('Updating Employee:', this.employee);

    this.service.update(this.employee.id, this.employee).subscribe({
      next: (res) => {
        console.log('Updated Successfully:', res);
        alert('Employee Updated Successfully');

        // Navigate back to list
        this.router.navigate(['/employees']);
      },
      error: (err) => {
        console.error('Update Error:', err);
        alert('Update Failed');
      }
    });
  }
}