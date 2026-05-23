import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { EmployeeService } from '../employee';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-search-employee',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './search-employee.html',
  styleUrls: ['./search-employee.css']
})
export class SearchEmployee {

  id!: number;
  employee?: Employee;
  notFound: boolean = false;

  constructor(private service: EmployeeService) {}

  searchEmployee() {

    if (!this.id || this.id <= 0) {
      alert('Please enter a valid Employee ID');
      return;
    }

    console.log('Searching ID:', this.id);

    this.service.getById(this.id).subscribe({
      next: (res) => {
        console.log('Found:', res);
        this.employee = res;
        this.notFound = false;
      },
      error: (err) => {
        console.error('Error:', err);
        this.employee = undefined;
        this.notFound = true;
      }
    });
  }
}
