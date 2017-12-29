import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  toggleHamburger:boolean = false;

  Constructor() {
    this.toggleSidebar();
  }

  toggleSidebar(){
    this.toggleHamburger =  !this.toggleHamburger;
  }

}
