import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.components.html',
  styleUrl: './app.components.css'
})
export class AppComponent{
  titulo = 'Bienvenidos al Buscador Pokemon de la 3227025 ';
}