import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subscriberList: any = [];
  constructor() { }

  ngOnInit() {
    this.subscriberList = JSON.parse(localStorage.getItem('subscribers'));
  }

  deleteSubscriber(index) {
    delete this.subscriberList[index];
    this.subscriberList = this.subscriberList.filter(sub => typeof sub !== null);
    localStorage.setItem('subscribers', JSON.stringify(this.subscriberList));
  }

}
