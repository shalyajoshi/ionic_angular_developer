import { Component, OnInit } from '@angular/core';
import { RandomuserService } from 'src/app/services/randomuser.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {
  randomUserArray: any;

  constructor(
    private randomUserService: RandomuserService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.randomUserService.getRandomUser().subscribe((randomUser)=>{
      console.log(randomUser)
      this.randomUserArray = randomUser.results[0];
    })
  }
}
