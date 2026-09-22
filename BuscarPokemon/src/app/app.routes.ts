import { Routes } from '@angular/router';
import { RegistroUsuario } from './components/registro-usuario/registro-usuario';
import { BuscadorPokemon } from './components/buscador-pokemon/buscador-pokemon';
import { Pikachu } from './components/pikachu/pikachu';
import { Charmander } from './components/charmander/charmander';
import { Bulbasaur } from './components/bulbasaur/bulbasaur';
import { Squirtle } from './components/squirtle/squirtle';
import { Pidgeotto } from './components/pidgeotto/pidgeotto';
import { Eevee } from './components/eevee/eevee';
import { PokemonsDetalles } from './components/pokemons-detalles/pokemons-detalles';
import { PokemonLista } from './components/pokemon-lista/pokemon-lista';



export const routes: Routes = [
  { path: '', redirectTo: 'registro', pathMatch: 'full' },
  { path: 'registro', component: RegistroUsuario },
  { path: 'buscador', component: BuscadorPokemon },
  { path: 'pokemon/pikachu', component: Pikachu },
  { path: 'pokemon/charmander', component: Charmander },
  { path: 'pokemon/bulbasaur', component: Bulbasaur },
  { path: 'pokemon/squirtle', component: Squirtle },
  { path: 'pokemon/pidgeotto', component: Pidgeotto },
  { path: 'pokemon/eevee', component: Eevee },
  { path: '**', redirectTo: 'registro' },
  { path: 'pokemon-lista', component: PokemonLista},
  { path: 'pokemon/:name', component: PokemonsDetalles}
];