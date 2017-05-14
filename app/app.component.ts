import { SoundService } from './services/sounds.service';
import { Component } from "@angular/core";
import * as tabViewModule from 'tns-core-modules/ui/tab-view';
var vibrator = require("nativescript-vibrate");
let sound = require("nativescript-sound");


const GREEN:string = '~/images/boton-green.png';
const RED:string = '~/images/boton-red.png';

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="La botonera de Joaco"></ActionBar>
    
    <TabView #tabView (selectedIndexChanged)="tabViewIndexChange(tabView.selectedIndex)">
      <StackLayout horizontalAlignment="center" verticalAlignment="center" *tabItem="{title: 'Animals'}">
        <Image (tap)="playSound()" src="{{buttonType}}"></Image>
    
        <ListPicker #picker class="picker" [items]="soundsNames" [selectedIndex]="selectedIndex" verticalAlignment="bottom" horizontalAlignment="center"
          (selectedIndexChange)="selectedIndexChanged(picker)">
        </ListPicker>
      </StackLayout>
      <StackLayout *tabItem="{title: 'Screams'}">
        <Image (tap)="playSound()" src="{{buttonType}}"></Image>
    
        <ListPicker #picker class="picker" [items]="soundsNames" [selectedIndex]="selectedIndex" verticalAlignment="bottom" horizontalAlignment="center"
          (selectedIndexChange)="selectedIndexChanged(picker)">
        </ListPicker>
      </StackLayout>
      <StackLayout *tabItem="{title: 'Laughs'}">
        <Image (tap)="playSound()" src="{{buttonType}}"></Image>
    
        <ListPicker #picker class="picker" [items]="soundsNames" [selectedIndex]="selectedIndex" verticalAlignment="bottom" horizontalAlignment="center"
          (selectedIndexChange)="selectedIndexChanged(picker)">
        </ListPicker>
      </StackLayout>
      <StackLayout *tabItem="{title: 'Others'}">
        <Image (tap)="playSound()" src="{{buttonType}}"></Image>
    
        <ListPicker #picker class="picker" [items]="soundsNames" [selectedIndex]="selectedIndex" verticalAlignment="bottom" horizontalAlignment="center"
          (selectedIndexChange)="selectedIndexChanged(picker)">
        </ListPicker>
      </StackLayout>
    </TabView>
    
    
  `
})
export class AppComponent{

  soundsRoutes:any[];
  soundsNames:string[];
  selectedSoundIndex:number;
  buttonType:string = GREEN;
  
  constructor(private _soundService:SoundService){};

  public playSound(){
    let sound = this.soundsRoutes[this.selectedSoundIndex?this.selectedSoundIndex:0].fileRoute;
    sound.play();
    this.buttonType = RED;
    vibrator.vibration(1000);
    setTimeout(() => {
      this.buttonType = GREEN;
    }, 1000);
  }

  public selectedIndexChanged(picker) {
    this.selectedSoundIndex = picker.selectedIndex;
  }

  public tabViewIndexChange(tab:number){

    switch(tab){
      case 0:
        this.soundsRoutes = this._soundService.getAnimalRoutesSounds();
        this.soundsNames = this._soundService.getAnimalNames();
        break;
      case 1:
        this.soundsRoutes = this._soundService.getScreamsRoutesSound();
        this.soundsNames = this._soundService.getScreamNames();
        break
      case 2:
        this.soundsRoutes = this._soundService.getLaughsRoutesSounds();
        this.soundsNames = this._soundService.getLaughsNames();
        break
      case 3:
        this.soundsRoutes = this._soundService.getSpecialsRoutesSounds();
        this.soundsNames = this._soundService.getSpecialsNames();
        break
      default:
        break
    };
  }
}
