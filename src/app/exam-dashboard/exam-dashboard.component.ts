import { Component, OnInit, EventEmitter, Output,Input } from '@angular/core';
import { questions } from './../questions';
import { ChartDataService } from './../chart-data.service';
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
  notDone:any=[];
  question=questions[0];
  showSubmit:boolean=false;
  showPrev:boolean =false;
  showQuestionsTabs : boolean=false;
  tabs :any =[];
  doneQuestions:any=[];
  
  constructor(public route: ActivatedRoute, public router: Router ,public resultService: ChartDataService) {}
  ngOnInit() {
    for(let i=1;i<=questions.length;i++){
      this.tabs.push(i);
    }
  }
  
  nextQuestion(){
    if(this.question.number != 2){
      this.showPrev = true;
    }
    if(this.doneQuestions[this.question.number] == undefined){
      this.doneQuestions[this.question.number]=false;
    }
    if(this.question.number == questions.length){
      alert("Click submit to proceed");
    }else if(this.question.number == questions.length-1){
      this.question=questions[this.question.number];
      this.showSubmit=true;
    }else{
      this.question=questions[this.question.number];
      this.showSubmit=false;
    }
  }

  prevQuestion(){
    this.showSubmit=false;
    this.question=questions[this.question.number -2];
    if(this.question.number == 1){
      this.showPrev = false;
    }else{
      this.showPrev = true;
    }
  }

  saveAnswer(number){
    this.doneQuestions[number] = true;
  }

  selectAns(event : MatRadioChange){
    if(event.value == this.question.answer){
      questions[this.question.number - 1].userAns= event.value;
      questions[this.question.number - 1].result = "correct";
    }else{
      questions[this.question.number - 1].userAns= event.value;
      questions[this.question.number - 1].result = "wrong";
    }
  }

  submitAnswers(){
    if(this.doneQuestions.indexOf(false) == -1){
      this.resultService.count();
      this.router.navigate(['/result']);
    }else{
      alert("Answer the questions and Save all the answers to proceed");
      this.question=questions[this.doneQuestions.indexOf(false)-1];
    }
  }
}
