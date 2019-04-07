import { Component, OnInit, EventEmitter, Output,Input } from '@angular/core';
import { questions } from './../questions';

import { ActivatedRoute, Router } from '@angular/router';

import { MatRadioChange } from '@angular/material/radio';


@Component({
  selector: 'app-exam-dashboard',
  templateUrl: './exam-dashboard.component.html',
  styleUrls: ['./exam-dashboard.component.sass']
})
export class ExamDashboardComponent implements OnInit {

  @Output()
  change: EventEmitter<MatRadioChange>
  res:any=[];
  question=questions[0];

  showQuestionsTabs : boolean=false;
  tabs :any =[];
  doneQuestions:any=[];

  constructor(public route: ActivatedRoute, public router: Router) {}
  ngOnInit() {
    for(let i=1;i<=questions.length;i++){
      this.tabs.push(i);
    }
    debugger;
  }
  
  nextQuestion(ans){
    debugger;
    if(this.question.number == questions.length){
      this.res;
      this.router.navigate(['/result'])
    }else{
      this.question=questions[this.question.number];
    }
  }

  prevQuestion(number){
    this.question=questions[this.question.number -2];
  }

  saveAnswer(number){
    this.doneQuestions[number] = true;
    document.getElementsByClassName("tabClass").s
    //cahnge the color of the Question Tab.
  }

  selectAns(val : MatRadioChange){
    if(val.value == this.question.answer){
     this.res[this.question.number] =[val.value ,'correct'];
    }else{
      this.res[this.question.number] =[val.value,'wrong'];
    }
  }

  showAllQuestion(number){
    this.showQuestionsTabs = !this.showQuestionsTabs;
  }
}
