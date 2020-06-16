import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title = 'Tour of Heroes';
  myHero = this.heroService.getFavoriteHero();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

}
