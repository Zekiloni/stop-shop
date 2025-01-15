import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationComponent} from './components/navigation';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [NavigationComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stop-shop';
}
