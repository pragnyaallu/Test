import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-instructions-page',
  templateUrl: './instructions-page.component.html',
  styleUrls: ['./instructions-page.component.sass']
})
export class InstructionsPageComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) {}

  title = 'Welcome to DarwinBox';
  ngOnInit() {
  }

}
