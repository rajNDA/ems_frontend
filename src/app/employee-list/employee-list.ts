import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
})
export class EmployeeList {

  employees: Employee[] = [
    { id: 1, name: 'Rajesh', department: 'IT', email: 'rajesh@gmail.com', salary: 50000 },
    { id: 2, name: 'Amit', department: 'HR', email: 'amit@gmail.com', salary: 40000 }
  ];

}