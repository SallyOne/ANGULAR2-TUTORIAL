import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from 'angular2/router';
@Component({
    selector: 'my-heroes',
    templateUrl: `app/heroes.component.html`,
    styleUrls: [`app/heroes.component.css`]
})

export class HeroesComponent implements OnInit {
    public heroes:Hero[];
    selectedHero: Hero; 
    constructor(private _heroservice:HeroService,private _router:Router) { }

    ngOnInit() {
        this.getHeroes();    
    }
    
    public getHeroes() {
        this._heroservice.getHeroes().then((heroes) => {
            this.heroes = heroes;    
        });
    }
    
    public onSelect(hero) {
        this.selectedHero = hero;
    }
    
    public gotoDetail() {
        this._router.navigate(['HeroDetail', {id: this.selectedHero.id}])
    }
}