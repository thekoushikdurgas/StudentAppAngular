import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appTitle = 'StudentApp';
  newStudent: Student = new Student();
  students: Student[] = []; // Array to store the list of students

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });
  }

  onSubmit() {
    this.newStudent.id = Math.floor(Math.random() * 1000) + 1;
    
    this.studentService.addStudent(this.newStudent).subscribe(() => {
      this.newStudent = new Student();
      this.fetchStudents();
    });
  }

  onDeleteStudent(studentId: number) {
    this.studentService.deleteStudent(studentId).subscribe(() => {
      this.fetchStudents(); // Fetch students again to refresh the list
    });
  }
}
