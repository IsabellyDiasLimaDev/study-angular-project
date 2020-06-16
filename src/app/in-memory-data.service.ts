import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  img = '../assets/coding.png';
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', img: '../assets/superhero.png' },
      { id: 12, name: 'Narco', img: '../assets/superhero_2.png' },
      { id: 13, name: 'Bombasto', img: '../assets/superhero.png' },
      { id: 14, name: 'Celeritas', img: '../assets/superhero_2.png' },
      { id: 15, name: 'Magneta', img: '../assets/superhero.png' },
      { id: 16, name: 'RubberMan', img: '../assets/superhero_2.png' },
      { id: 17, name: 'Dynama', img: '../assets/superhero.png' },
      { id: 18, name: 'Dr IQ', img: '../assets/superhero_2.png' },
      { id: 19, name: 'Magma', img: '../assets/superhero.png' },
      { id: 20, name: 'Tornado', img: '../assets/superhero_2.png' },
      { id: 21, name: 'Dr Strange', img: '../assets/superhero.png'}
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}