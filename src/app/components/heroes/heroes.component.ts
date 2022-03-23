import { Component, OnInit } from '@angular/core';
import { HEROESMOCKDATA } from 'src/app/mock-data/mock-heroes';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  //with ? it means that is null-able

  constructor(private heroService: HeroService) { }
  //private hides this service from the front end, making it not available to html
  //unlike the  heroes: Hero[] = []; and selectedHero?: Hero;which are publib
  //trying to make selectedHero private causes an error

  ngOnInit(): void {
    this.getHeroes();
  }

  onselect(pippo: Hero) {
    this.selectedHero = pippo;
  }

  getHeroes(): void //void means that it doesn't have a return
  {
    this.heroes = this.heroService.getHeroes();
  }
}
