import { Component, OnInit } from '@angular/core';
import { animate, transition, state, style, trigger } from '@angular/animations';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(900)
      ]),
      transition('* => void', [
        animate(900, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})


export class HeroesComponent implements OnInit {

  /*
  In the same file (HeroesComponent class), 
  define a component property called heroes to expose the HEROES array for binding.
  */

  heroes: Hero[];

  /*
   The parameter simultaneously defines a private heroService property 
   and identifies it as a HeroService injection site.
   Reserve the constructor for simple initialization such as wiring constructor parameters to properties. 
   The constructor shouldn't do anything
   */
  constructor(private heroService: HeroService) { }

  /*
   Instead, call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() 
   at an appropriate time after constructing a HeroesComponent instance.
   */
  /*
  The HeroService.getHeroes() method has a synchronous signature, 
  which implies that the HeroService can fetch heroes synchronously. 
  The HeroesComponent consumes the getHeroes() result as if heroes could be fetched synchronously.
  */
  ngOnInit() {
    this.getHeroes();
  }

  /*
  The subscribe() method passes the emitted array to the callback, 
  which sets the component's heroes property.
  */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}