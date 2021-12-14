import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  items: any[];
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.items = JSON.parse(this.route.snapshot.params['item']);
    console.log(this.items)
  }

  ngOnInit() {
  }
  counter(i: number) {
    return new Array(i);
}
getrandom(){
  return Math.floor(Math.random() * 90 + 10);
}
}
