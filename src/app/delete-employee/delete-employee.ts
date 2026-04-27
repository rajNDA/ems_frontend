import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee';

@Component({
  selector: 'app-delete-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-employee.html',
  styleUrls: ['./delete-employee.css']
})
export class DeleteEmployee {

  employeeId: number | null = null;

  deleteEmployee() {
    console.log('Deleted Employee ID:', this.employeeId);

    // Later API call:
    // this.employeeService.deleteEmployee(this.employeeId).subscribe(...)
  }
}
