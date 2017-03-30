import {Component, OnInit} from '@angular/core';
import {RESULT}from './data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  repos: Array<any>;

  ngOnInit() {
    this.repos = RESULT.items;
  }
}
