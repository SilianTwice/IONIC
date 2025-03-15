import { Component } from '@angular/core';

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
  
  pgName = "Буль буль "
  pokemons = ["Пикачу","Торчик","Чармондер"]

  poke: pokeINFO[] = [{pName:"Стоун",pAbilitise:"Бросок камня"},{pName:"Рой",pAbilitise:"пламя"}]

  constructor() {}


  btnClick() {
    this.pgName = this.pgName + " буль"
  }
}
