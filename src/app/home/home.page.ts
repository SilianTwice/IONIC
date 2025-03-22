import { Component } from '@angular/core';
import {} from "./home-service.service"

interface pokeINFO{
  pName: string
  pAbilitise: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  pokemonsINFO: pokeINFO[] = []
  pgName = "Буль буль "

  constructor(private data: homeService) {}

  pokemons = ["Пикачу","Торчик","Чармондер"]
  poke: pokeINFO[] = 
  [
    {pName:"Стоун",pAbilitise:"Бросок камня"},
    {pName:"Рой",pAbilitise:"пламя"}
  ]

  btnClick() {
    this.pgName = this.pgName + " буль"
  }
}
