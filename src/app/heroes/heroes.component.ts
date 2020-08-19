import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  /*
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  // heroes = HEROES;
  heroes: Hero[];

  // selectedHero: Hero;

  // constructor() { }
  constructor(private heroService: HeroService, private messageService: MessageService) { // Injetando o servico

    // Reserve the constructor for simple initialization such as wiring constructor parameters to properties. 
    // The constructor shouldn't do anything. 
    // It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  /*
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }*/

  /*
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }*/

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes(); // Isso é sincrono
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes); // Isso é assincrono
  }

}
