import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal, Service } from '@angular/core';
export interface PokemonTarjeta{
  id: number;
  nombre: string;
  imagen: string;
  tipo: string;
  baseExperience: string;
  esFavorito: boolean;
}
@Service()

@Injectable({
  providedIn: 'root'
})

export class PokemonStorage{
  private http = inject(HttpClient)
  private readonly STORAGE_KEY = 'equipo_pokemon_registrado';

  misPokemons = signal<PokemonTarjeta[]>([]);

  private cargarDesdeStorage(){
    const data = localStorage.getItem(this.STORAGE_KEY);
    if(data){
      this.misPokemons.set(JSON.parse(data))
    }
  }

  buscarEnApi(nombreId: string){
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${nombreId}`)
  }

  guardarPokemon(nuevo: PokemonTarjeta){
    const actualizados = [...this.misPokemons(), nuevo];
    this.misPokemons.set(actualizados);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(actualizados));
  }

  actualizar(){

  }
  eliminar(){
    
  }

  constructor(){
    this.cargarDesdeStorage();
  }
}

export class PokemonStorageService {

  constructor() { }
}