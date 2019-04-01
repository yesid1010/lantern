import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public flash : Flashlight){

  }


  switchFlash(event){
    let power : boolean = event.target.checked;
    if(power){
      this.flash.switchOn();
    }else{
      this.flash.switchOff();
    }
    
  }
}
