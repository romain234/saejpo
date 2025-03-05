import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  tab: number = 1;

  changetab(x :number){
    this.tab= x;
  }
}
