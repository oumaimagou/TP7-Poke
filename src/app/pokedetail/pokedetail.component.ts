import {Component, Input, OnInit} from '@angular/core';
import {PokeDetail} from "../pokemon";
import {PokeShareInfoService} from "../poke-share-info.service";

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrl: './pokedetail.component.css',
 // providers : [PokeShareInfoService]
})
export class PokedetailComponent implements OnInit{

  // tslint:disable-next-line:no-input-rename
  @Input('detail')
  detail!: PokeDetail;

  constructor(private pokeShareInfoService : PokeShareInfoService) {
  this.pokeShareInfoService.getObservable().subscribe(e => console.log('e' + e));
  }

  ngOnInit() {
    console.log(this.pokeShareInfoService.getValue());
  }

}
