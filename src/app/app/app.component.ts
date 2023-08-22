import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'StudentApp'; // Define the appTitle property here
  newStudent: Student = new Student();

  constructor(private studentService: StudentService) {}

  onSubmit() {
    this.studentService.addStudent(this.newStudent).subscribe(() => {
      this.newStudent = new Student();
    });
  }
}
