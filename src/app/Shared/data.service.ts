import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   info1: string[]=["Customer"]
   info2: string[]=["Marketing"]
   info3: string[]=["Dealer"]
   info4: string[]=["Production"]


   getInfo1():string[]{
    return this.info1
   }

   getInfo2():string[]{
    return this.info2
   }

   getInfo3():string[]{
    return this.info3
   }

   getInfo4():string[]{
    return this.info4
   }
  constructor() { }
}
