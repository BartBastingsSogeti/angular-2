// app.component.ts
import { Component } from 'angular2/core';
import { City } from './model/city.model';
import { CityService } from './services/city.service';

@Component({
    selector: 'main-app',
    templateUrl : 'app/app.component.html'
})

export class AppComponent {
    title:string;
    city:City;
    cities:City[];
    cityPhoto:string;
    currentCity:City;
    showCityVisible:boolean;

    constructor(private cityService:CityService) {
        this.title = 'Test Services';
        this.cityPhoto ='';
        this.showCityVisible = false;
    }

    ngOnInit(){
		this.getCities();
    }
    
    getCities() {
        this.cities = this.cityService.getCities();
    }

    getCity(cityId:number) {
        this.city = this.cityService.getCity(Number(cityId));
        console.log(this.city);
    }

    showCity(city:City) {
        if (this.currentCity !== city) {
            let imgUrl = '',
                visible = false;

            this.currentCity = city;
            if (this.currentCity.province !== 'onbekend') {
                imgUrl = `img/${this.currentCity.name}.jpg`;
                visible = true;
            }
            this.showCityVisible = visible;
            this.cityPhoto = imgUrl;
        }
    }
    
    hideCityPhoto() {
        if (this.showCityVisible) {
            this.showCityVisible = false;
        }
    }

    addCity(cityName:string) {
        this.cityService.addCity(cityName);
    }

    deleteCity(cityId:number) {
        this.cityService.deleteCity(cityId);
    }
}