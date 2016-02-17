import { Component } from 'angular2/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import {HEROES} from './mock-heroes';
import {OnInit} from 'angular2/core';
import {HeroService} from './hero.service';
@Component({
    selector: 'my-app',
    template: `
		<h1>{{title}}</h1>
		<h2>My Heroes</h2>
		<ul class="list-group col-sm-6">
			<li class="list-group-item" *ngFor="#hero of heroes" (click)="onSelect(hero)" [class.selected]="hero == selectedHero">
				<span class="badge">{{hero.id}}</span>{{hero.name}}
			</li>
		</ul>
		<my-hero-detail [hero]="selectedHero"></my-hero-detail>

	`,
	styles: [
		`
			.selected {
				background-color: #CFD8DC !important;
      			color: white;
			}
		`
	],
	directives: [HeroDetailComponent],
	providers: [HeroService]
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private _heroService: HeroService) { }

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
