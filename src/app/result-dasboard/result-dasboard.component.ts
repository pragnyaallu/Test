import { Component, OnInit} from '@angular/core';
import { ChartDataService } from './../chart-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result-dasboard',
  templateUrl: './result-dasboard.component.html',
  styleUrls: ['./result-dasboard.component.sass']
})
export class ResultDasboardComponent implements OnInit {
  
  constructor(public route: ActivatedRoute,public router: Router,public resultService: ChartDataService) { }
  ngOnInit() { }

  title = 'Results of the Test';
  chartOptions = {
    responsive: true  
  }
  labels =  ['Correct', 'Wrong'];
  chartData = [
    {
      label: 'Results',
      data: [this.resultService.correct, this.resultService.wrong] 
    }
  ];
  colors = [
    { 
      backgroundColor: ['#115911','#cc2525']
    }
  ]

}
