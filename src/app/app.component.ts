import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { SharedService } from './shared.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements AfterViewInit {


  @ViewChild("kendoContainer", { read: ViewContainerRef }) public kendoContainerRef: ViewContainerRef;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  };
  
  
  ngAfterViewInit() {
    SharedService.kendoContainerRef = this.kendoContainerRef;
  };
  
  
  public cancelTouchEnd($event) {
    $event.stopPropagation();
  };
}
