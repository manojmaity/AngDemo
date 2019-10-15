import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../../heroes/hero';
import { HEROES } from '../../heroes/mock-heroes';
import { HeroesComponent } from 'src/app/heroes/heroes.component';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagerService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messagerService.add('HeroService: fetched heroes.');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messagerService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
