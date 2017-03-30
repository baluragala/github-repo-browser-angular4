import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchTerm: FormControl = new FormControl();

  constructor() {
    this.searchTerm.valueChanges
      .debounceTime(400)
      .subscribe(q => console.log('q:' + q))
  }

  ngOnInit() {
  }


}
