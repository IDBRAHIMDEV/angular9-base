import { Component } from '@angular/core';
import Swal from 'sweetalert2'

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

  deleteCourse(id: number) {
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'To delete this item ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: "Deleted",
          text: "Course deleted SuccessFully",
          icon: "success",
          timer: 5000
        })
       
           this.listCourses = this.listCourses.filter(course => course.id !== id)

      }
    })

    // if(confirm("Are you sure to delete this course ?")) {

    //   this.listCourses = this.listCourses.filter(course => course.id !== id)
    // }
  }
  
}
