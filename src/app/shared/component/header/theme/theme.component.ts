import { Component, OnInit} from '@angular/core';
import { LayoutService } from '../../../../shared/services/layout/layout.service';


@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit{

  public dark: boolean;

  constructor(public layout: LayoutService) { 
  
     this.dark = localStorage.getItem('darkMode') === 'true';

     this.applyDarkMode();
  }

  layoutToggle() {
    this.dark = !this.dark;

 
 localStorage.setItem('darkMode', this.dark.toString());
 this.applyDarkMode();


    this.dark
      ? document.body.classList.add('dark-only')
      : document.body.classList.remove('dark-only');
    this.layout.config.settings.layout_version = this.dark
      ? 'dark-only'
      : 'light-only';

  }


  private applyDarkMode() {
    if (this.dark) {
      document.body.classList.add('dark-only');
    } else {
      document.body.classList.remove('dark-only');
    }
  }

  ngOnInit(): void { }

}
