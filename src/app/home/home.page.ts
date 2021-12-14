import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';  
import { ModalPage } from '../modal/modal.page';
import { RandomuserService } from '../services/randomuser.service';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { isNgTemplate } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  show = false;
  randomUserArray: any[];
  ngOnInit(): void {
    this.getUser();
    this.getRandomImage();

  }
  constructor(
    private randomUserService: RandomuserService,
    public modalCtrl: ModalController,
    private ss: SocialSharing,
    private router: Router) {}  
  async showModal() {  
    const modal = await this.modalCtrl.create({  
      component: ModalPage  
    });  
    return await modal.present();  
  }  
  getUser(){
    this.randomUserService.getRandomUser().subscribe((randomUser)=>{
      this.randomUserArray = randomUser.results;
    })
  }

  getRandomImage(){
    var num = Math.floor(Math.random() * 900) + 100;
    return `https://picsum.photos/id/${num}/50`;
  }
  share(){
    this.ss.share('this is test string',null,null,null)
  }
  addEvent(x){
    this.show = !this.show;
  }
  gotoProfile(item){
    this.router.navigate(['/profile',{'item':JSON.stringify(item)}]);
  }
}
