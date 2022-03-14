import { Component, OnInit } from '@angular/core';
import { HEROESMOCKDATA} from 'src/app/mock-data/mock-heroes';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROESMOCKDATA;
  selectedHero?: Hero; //with ? it means that is null-able
  

  constructor() { }

  ngOnInit(): void {
  }

  onselect(pippo:Hero){
   this.selectedHero = pippo;
  }

}
