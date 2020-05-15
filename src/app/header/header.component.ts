import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() headerEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeContent(currentTab){
    this.headerEvent.emit(currentTab);
  }
}
