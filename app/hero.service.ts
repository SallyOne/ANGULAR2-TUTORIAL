import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
    public getHeroes() {
        return new Promise((resolve,reject) => {
            resolve(HEROES);
        });
    }
}
