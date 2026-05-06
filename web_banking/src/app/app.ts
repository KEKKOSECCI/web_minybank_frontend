import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarHome } from './components/navbar-home/navbar-home';


@Component({
  selector: 'app-root',
  imports: [NavbarHome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('web_banking');
}
