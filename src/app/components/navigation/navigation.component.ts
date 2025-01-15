import { Component } from '@angular/core';
import {Ripple} from 'primeng/ripple';
import {StyleClassModule} from 'primeng/styleclass';
import {BadgeModule} from 'primeng/badge';

@Component({
  standalone: true,
  selector: 'app-navigation',
  imports: [
    Ripple,
    StyleClassModule,
    BadgeModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
