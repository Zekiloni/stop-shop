import { Component } from '@angular/core';
import {Ripple} from 'primeng/ripple';
import {StyleClassModule} from 'primeng/styleclass';
import {BadgeModule} from 'primeng/badge';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navigation',
  imports: [
    Ripple,
    StyleClassModule,
    BadgeModule,
    RouterLink
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
