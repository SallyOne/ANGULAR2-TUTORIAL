import { Component,OnInit } from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {RouteParams} from 'angular2/router';
@Component({
    selector: 'my-hero-detail',
    templateUrl : `app/hero-detail.component.html`, 
    styleUrls: [`app/hero-detail.component.css`]
})

export class HeroDetailComponent implements OnInit{
    hero: Hero;
    constructor(private _heroes:HeroService,
                private _routeParams: RouteParams ){}
    
    ngOnInit(){
        let id = parseInt(this._routeParams.get('id'));
        this._heroes.getHero(id).then((hero) => {
            this.hero = hero;
        })
    }
}
