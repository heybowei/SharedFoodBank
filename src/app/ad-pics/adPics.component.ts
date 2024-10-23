import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pics-show',
  templateUrl: './adPics.component.html',
  styleUrl: './adPics.component.css'
})
export class AdPicComponent implements OnInit{
  title = 'sharedFoodBank';
  
  public Path = [
    "/main-page/img1.jpeg",
    "/main-page/img2.webp",
    "/main-page/img3.jpg"
  ]
  public index = 0;
  private timeleft = 5;
  
  ngOnInit(): void {
    let interval
    interval = setInterval(() => {
        if(this.timeleft > 0){
            this.timeleft--;
        } else if(this.timeleft == 0){
            this.timeleft = 5;
            this.onNext();
        }
    }, 1000);
  }
  onNext(){
    if(this.index < 2){
        this.index = this.index + 1;
    } else {
        this.index = 0;
    }
  }

  onPre(){
    if(this.index > 0){
        this.index--;
    } else {
        this.index = 2;
    }
  }
}
