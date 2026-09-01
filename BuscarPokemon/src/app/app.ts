import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Pokemon {
  name: string;
  image: string;
}

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private http = inject(HttpClient);

  protected readonly query = signal('ditto');
  protected readonly pokemon = signal<Pokemon | null>(null);
  protected readonly loading = signal(false);
  protected readonly error = signal<string | null>(null);

  protected search(): void {
    const name = this.query().trim().toLowerCase();
    if (!name) {
      this.error.set('Escribe el nombre de un Pokémon.');
      this.pokemon.set(null);
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    this.http
      .get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .subscribe({
        next: (data) => {
          this.pokemon.set({
            name: data.name,
            image:
              data.sprites?.other?.['official-artwork']?.front_default ??
              data.sprites?.front_default ??
              '',
          });
          this.loading.set(false);
        },
        error: () => {
          this.pokemon.set(null);
          this.error.set(`No se encontró ningún Pokémon llamado "${name}".`);
          this.loading.set(false);
        },
      });
  }
}
