import { Component, ViewContainerRef } from '@angular/core';

import { SharedService } from '../shared.service'

@Component({
  selector:    'app-home',
  templateUrl: 'home.page.html',
  styleUrls:   ['home.page.scss'],
})
export class HomePage {

  public items;
  public selectedItem;
  public selectedItem2;
  
  public kendoContainer: ViewContainerRef;
  
  
  constructor() {
  
    this.items = [
      "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12", "Item 13", "Item 14", "Item 15", "Item 16", 
      "Item 17", "Item 18", "Item 19", "Item 20", "Item 21", "Item 22", "Item 23"
    ];

    this.selectedItem = this.items[0];
    this.selectedItem2 = this.items[0];
  };
  
  
  ngOnInit() {
  
    this.kendoContainer = SharedService.kendoContainerRef;
  };
};