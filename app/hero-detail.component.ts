import { Component } from 'angular2/core';
import {Hero} from './hero';

@Component({
    selector: 'my-hero-detail',
    template: `
    <div *ngIf="hero" class="col-sm-7">
        <h2>{{hero.name}} detail!</h2>
        <div><label>id:</label>{{hero.id}}</div>
        <div>
            <label>name:</label>
            <input placeholder="name" [(ngModel)]="hero.name"/>
        </div>
    </div>
    `,
    inputs: ['hero']
})

export class HeroDetailComponent{
    hero: Hero;
}
