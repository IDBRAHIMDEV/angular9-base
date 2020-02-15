import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  myCourse = {
    id: 0,
    label: ""
  };

  title: string = "Salam les developpeurs";

  listCourses = [
    { id: 1, label: "Learn Angular" },
    { id: 2, label: "Learn ReactJS" },
    { id: 3, label: "Learn Laravel" }
  ];

  constructor() { }

  addCourse() {
    // this.listCourses.unshift(this.myCourse);

    this.listCourses = [...this.listCourses, this.myCourse];

    this.myCourse = {
      id: 0,
      label: ""
    };
  }
  
}
