import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.css']
})
export class AddSubscriberComponent implements OnInit {

  name: string = null;
  phoneNo: number = null;
  subscriberList = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.subscriberList = JSON.parse(localStorage.getItem('subscribers'));
  }

  goBack() {
    this.router.navigate(['/']);
  }

  addSubscriber() {
    this.subscriberList = (this.subscriberList !== null) ? this.subscriberList : [];
    this.subscriberList.push({
      name: this.name,
      phone: this.phoneNo
    });
    localStorage.setItem('subscribers', JSON.stringify(this.subscriberList));
    this.router.navigate(['/']);
  }

}
