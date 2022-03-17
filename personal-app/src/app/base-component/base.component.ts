import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'base-component',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  title = 'personal-app';
  selectedItem: number;

  constructor()
  {
    this.selectedItem = 1;
  }

  selectOption(option: number){
    this.selectedItem = option;
  }
  
  ngOnInit(): void {
  }

}
