import {Component, OnInit} from '@angular/core';
import {PokeDetail, Pokemon} from "../pokemon";
import {PokeAPIServiceService} from "../poke-apiservice.service";
import {PokeShareInfoService} from "../poke-share-info.service";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit{
  id: string = '';
  selectedPokeId!: string ;
  searchPokeName  = '';
  pokes : Pokemon[] = [];
  pokeDetail: PokeDetail | undefined;


  constructor(private pokeService : PokeAPIServiceService, private pokeShareInfoService : PokeShareInfoService) {

  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data)=>{

      data.results.forEach((poke: { name: any; url: string; }, index: any) => {
          this.pokes.push(new Pokemon(index, poke.name, poke.url));
        });
   }
    );
  }
  go(){


    if(this.selectedPokeId != ''){
      this.pokeService.getPokemonInfo(this.selectedPokeId).
      subscribe(data => this.pokeDetail = data)

      this.pokeShareInfoService.setValue(this.selectedPokeId);
    }
  }
}
