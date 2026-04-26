import { Routes } from '@angular/router';

import { EmployeeList } from './employee-list/employee-list';
import { AddEmployee } from './add-employee/add-employee';
import { UpdateEmployee } from './update-employee/update-employee';
import { DeleteEmployee } from './delete-employee/delete-employee';

export const routes: Routes = [
  { path: 'employees', component: EmployeeList },
  { path: 'add', component: AddEmployee },
  { path: 'update', component: UpdateEmployee },
  { path: 'delete', component: DeleteEmployee },
  { path: '', redirectTo: 'employees', pathMatch: 'full' }
];