import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  public stringVar = new Subject<string>();

  getObservable(): Subject<string>{
    return this.stringVar;
  }

  public setValue(newStringVar : string){
    this.stringVar.next(newStringVar);
  }
  private value: string | undefined;

  constructor() { }



  setValue2(value: string){
    this.value= value;
  }
  getValue(): string | undefined {
    return this.value ;
  }
}
