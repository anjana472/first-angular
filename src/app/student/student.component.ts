import { Component,OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  newStudent: Student = { id: 0, name: '', age: 0, grade: '' };

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });
  }

  addStudent(): void {
    this.studentService.addStudent(this.newStudent);
    this.newStudent = { id: 0, name: '', age: 0, grade: '' };
  }
}
