import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item ='';
  @Output() reset = new EventEmitter();

  @Input() index = 0;
  @Output() remove = new EventEmitter();

  
  @Output() edit = new EventEmitter();
  @Output() apply = new EventEmitter();

  show = true;

  constructor() { }

  ngOnInit() {
  }

  remove2() {
    this.remove.emit(this.index);
  }

  apply2() {
    var data = {
      index: this.index,
      item: this.item
    }
    
    this.apply.emit(data);
    this.show = true;
  }

  reset2() {
    var data = {
      index: this.index,
      item: ""
       }
    
    this.reset.emit(data);
    
  }

  edit2() {
    this.show = false;
  }
}
