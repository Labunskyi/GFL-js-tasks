import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [
    ShareService
  ]
})
export class ListComponent implements OnInit {


  item = '';

  constructor(private ss: ShareService) { 

  }

  ngOnInit() {
  }
  
  add() {
    this.list.push(this.item);
    this.item = '';
    this.save();
  }

  remove (index) {
    this.list.splice(index, 1);
    this.save();
  }

  get count_items() {
    return this.list.length;
  }

  get list(){
    return this.ss.list;
  }

  apply(data) {
    this.ss.list[data.index] = data.item;
    
    console.log(data);
    this.save();
  }

  reset(data) {
    this.ss.list[data.index] = data.item;
    
    console.log(data);
    this.save();
  }

  save() {
    localStorage.save = JSON.stringify(this.ss.list);
  }
}
