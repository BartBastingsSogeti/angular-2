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
    textHidden:boolean;
    toggleMsg:string;
    showCities:boolean;
    newCity:string;
    currentCity:City;
    cityPhoto:string;

    constructor() {
        this.title = 'Kantoren Sogeti';
        this.toggleMsg = 'Vergreg lijst met kantoren';
        this.cityPhoto = '';
        this.newCity = '';
        this.showCities = true;
        this.textHidden = true;
        this.cities = [
            new City(1, 'Vianen', 'Utrecht'),
            new City(2, 'Amersfoort', 'Utrecht'),
            new City(3, 'Amsterdam', 'Noord-holland'),
            new City(4, 'Eindhoven', 'Noord-brabant'),
            new City(5, 'Groningen', 'Groningen')
        ];
    }

    btnClick() {
        let msg;
        this.showCities ? msg = 'Kantoren zijn zichtbaar!' : msg = 'Kantoren zijn verborgen.' ;
        alert(msg);
    }

    toggleHidden() {
        this.textHidden = !this.textHidden;
    }

    toggleCities() {
        this.showCities = !this.showCities;
        this.showCities
            ? this.toggleMsg = 'Verberg lijst met steden'
            : this.toggleMsg = 'Toon de lijst met steden';
    }

    showCity(city:City) {
        if ( this.currentCity !== city) {
            let imgUrl = '';

            this.currentCity = city;
            if (this.currentCity.province !== 'onbekend') {
                console.log(this.currentCity.name);
                imgUrl = `img/${this.currentCity.name}.jpg`;
            }
            this.cityPhoto = imgUrl;
        }
    }

    changeCity(value:string) {
        this.newCity = value;
    }
    
    addCity(value:string) {
        let newCity = new City(
            this.cities.length + 1,
            value,
            'onbekend');

        this.cities.push(newCity);
    }
}