// app.component.ts
import { Component } from 'angular2/core';
import { City } from './model/city.model';

@Component({
    selector : 'main-app',
    templateUrl : 'app/app.component.html'
})

export class AppComponent {
    title:string;
    cities:City[];

    constructor() {
        this.title = 'Kantoren Sogeti';
        this.cities = [
            new City(1, 'Vianen', 'Utrecht'),
            new City(2, 'Amersfoort', 'Utrecht'),
            new City(3, 'Amsterdam', 'Noord-holland'),
            new City(4, 'Eindhoven', 'Noord-brabant'),
            new City(5, 'Groningen', 'Groningen')
        ];
    }

    btnClick(){
        alert('Test alert');
    }
}
