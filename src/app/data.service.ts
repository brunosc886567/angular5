import { Injectable } from '@angular/core';
 import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any> (['Tste1', 'Teste2']);
  public goal = this.goals.asObservable();

  constructor() {

   }
   changeGo(goal) {
    this.goals.next(goal);
   }
}
