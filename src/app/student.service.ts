import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [];

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }
}
