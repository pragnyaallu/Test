import { Injectable } from '@angular/core';
import { questions } from './questions';

@Injectable({
  providedIn: 'root'
})

export class ChartDataService {

  constructor() { }
  correct:number = 0;
  wrong:number = 0;

  count(){
    for(let i = 0 ;i<questions.length;i++){
      if(questions[i].result == "correct"){
        this.correct++;
      }else{
        this.wrong++;
      }
    }
  }

}
