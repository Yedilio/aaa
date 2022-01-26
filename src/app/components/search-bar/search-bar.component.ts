import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  animations: [
    trigger('enterAnim', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('50ms ease-in', style({ opacity: 0 })),
        animate('350ms ease-in', style({ opacity: '*' })),
      ]),
    ]),
  ],
})
export class SearchBarComponent implements OnInit {
  str: string = '';
  isSearch: boolean = false;
  option: number = 0;

  constructor() {}

  ngOnInit(): void {}

  setSearch() {
    this.isSearch = !this.isSearch;
  }
}
