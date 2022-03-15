import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-app';
  selectedItem: number;

  constructor()
  {
    this.selectedItem = 1;
  }

  selectOption(option: number){
    this.selectedItem = option;
  }
}
