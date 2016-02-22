import {Component, OnInit} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Heroes']">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styles : [
        `
            h1 {
                font-size: 1.2em;
                color: #999;
                margin-bottom: 0;
            }
            h2 {
                font-size: 2em;
                margin-top: 0;
                padding-top: 0;
            }
            nav a {
                padding: 5px 10px;
                text-decoration: none;
                margin-top: 10px;
                display: inline-block;
                background-color: #eee;
                border-radius: 4px;
            }
            nav a:visited, a:link {
                color: #607D8B;
            }
            nav a:hover {
                color: #039be5;
                background-color: #CFD8DC;
            }
            nav a.router-link-active {
                color: #039be5;
            }        
        
        `    
    ],
    directives: [ROUTER_DIRECTIVES ],
    providers: [ROUTER_PROVIDERS, HeroService]
})
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/dashboard/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent,
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }
])

export class AppComponent implements OnInit {
    public title = 'Tour of Heroes';
    constructor() { }

    ngOnInit() { }
}
