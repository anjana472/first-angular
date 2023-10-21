// app.component.ts

import { Component } from '@angular/core';
import { Student } from './student.model'; // Import the Student interface or model

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'your-angular-app';
  students: Student[] = [];
  newStudent: Student = { id: 0, name: '', age: 0, grade: '' }; // Assuming Student is your interface/model

  // Method to add a new student
  addStudent(): void {
    this.students.push(this.newStudent);
    this.newStudent = { id: 0, name: '', age: 0, grade: '' };
  }

  // Add other properties and methods as needed
}



