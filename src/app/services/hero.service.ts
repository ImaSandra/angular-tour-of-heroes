import { Injectable } from '@angular/core';
import { HEROESMOCKDATA } from '../mock-data/mock-heroes';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Hero[] {
    return HEROESMOCKDATA;
  }
}
