import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { EmployeeService } from '../employee';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
})
export class EmployeeList implements OnInit {

  employees: Employee[] = [];

  constructor(
    private service: EmployeeService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.service.getAll().subscribe({
      next: (data) => {
        console.log('API Data:', data);

        this.employees = data;

        // 🔥 FORCE UI UPDATE
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}