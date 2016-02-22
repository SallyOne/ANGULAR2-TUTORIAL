import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from 'angular2/router';
@Component({
    selector: 'my-dashboard',
    templateUrl: `app/dashboard.component.html`,
    styleUrls: [`app/dashboard.component.css`],
    providers: [HeroService]
})

export class DashboardComponent implements OnInit  {
    heroes:Hero[] = [];
    constructor(private _heroService: HeroService,
                private _router:Router) { }

    ngOnInit() {
        this._heroService.getHeroes().then((heroes) => {
            this.heroes = heroes.slice(1,5);
        });    
    }
    public gotoDetail(hero) {
        this._router.navigate(['HeroDetail',{id:hero.id}]);
    }
}