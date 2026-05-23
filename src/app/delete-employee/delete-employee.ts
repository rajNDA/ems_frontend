import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee';

@Component({
  selector: 'app-delete-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-employee.html',
  styleUrls: ['./delete-employee.css']
})
export class DeleteEmployee {

  id!: number;

  constructor(
    private service: EmployeeService,
    private router: Router
  ) {}

  deleteEmployee() {

    if (!this.id || this.id <= 0) {
      alert('Please enter a valid Employee ID');
      return;
    }

    const confirmDelete = confirm(`Are you sure you want to delete Employee ID ${this.id}?`);
    if (!confirmDelete) return;

    console.log('Deleting ID:', this.id);

    this.service.delete(this.id).subscribe({
      next: (res) => {
        console.log('Delete Response:', res);

        // 🔥 Treat as success always
        alert('Employee Deleted Successfully');

        this.router.navigate(['/employees']);
      },
      error: (err) => {
        console.error('Delete Error:', err);

        // 🔥 IMPORTANT FIX
        if (err.status === 200 || err.status === 204) {
          alert('Employee Deleted Successfully');
          this.router.navigate(['/employees']);
        } else {
          alert('Delete Failed');
        }
      }
    });
  }
}