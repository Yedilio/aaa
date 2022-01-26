import { Component } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(20%)' }),
        animate('650ms ease-in', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class AppComponent {
  isSearch: boolean = false;
}
