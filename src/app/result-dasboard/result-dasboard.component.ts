import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result-dasboard',
  templateUrl: './result-dasboard.component.html',
  styleUrls: ['./result-dasboard.component.sass']
})
export class ResultDasboardComponent implements OnInit {
  
  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) { }
  ngOnInit() {
  }

  title = 'Results of the Test';
  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }
  labels =  ['Correct', 'Wrong'];
  chartData = [
    {
      label: 'Results',
      data: [21, 9] 
    }
  ];
  colors = [
    { // 1st Year.
      backgroundColor: ['green','red']
    }
  ]

  onChartClick(event) {
    console.log(event);
  }

}
