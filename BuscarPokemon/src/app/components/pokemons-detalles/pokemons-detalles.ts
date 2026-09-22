import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonStorage } from '../../services/pokemon-storage.service';

@Component({
  selector: 'app-pokemons-detalles',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './pokemons-detalles.html',
  styleUrl: './pokemons-detalles.css',
})
export class PokemonsDetalles implements OnInit {
  private route = inject(ActivatedRoute);
  private pokeService = inject(PokemonStorage);

  pokemonData: any = null;
  cargando: boolean = true;

  ngOnInit(): void {
    const pokeName = this.route.snapshot.params['name'];

    this.pokeService.consultarPokemon(pokeName).subscribe({
      next: (data) => {
        this.pokemonData = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Se quemó está vaina. No llegó ningún dato.', err);
        this.cargando = false;
      }
    });
  }
}
