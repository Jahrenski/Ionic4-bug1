import { Injectable, Inject, ViewContainerRef } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public static kendoContainerRef: ViewContainerRef = null;


  constructor() {};
};
