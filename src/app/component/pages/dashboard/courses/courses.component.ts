import { Component } from '@angular/core';
import { coursesData } from '../../../../shared/data/component/widget/general/general';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  public courseData = coursesData;

}
