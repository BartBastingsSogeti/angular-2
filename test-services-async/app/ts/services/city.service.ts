// city.service.ts
import { Injectable } from 'angular2/core';
import { City } from '../model/city.model';
import { Http } from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class CityService {

    constructor(private http:Http) { }

    /**
     * getCities
     * Returns all citiys from the array cities;
     * 
     * @returns {array}
     */
    getCities() {
        return this.http.get('app/cities.json')
            .map(res => <City[]> res.json());
    }

    /**
     * getCity
     * Returns City object with the param city id;
     * 
     * @param {number} id
     * 
     * @returns {City | null}
     */
    getCity(id:number):City {
        let city = this.cities.filter(c => c.id === id)[0];
        if (typeof city === 'undefined') {
             city = null;
        }
        return city;
    }

    /**
     * addCity
     * Create a new city object and ad it to the cities array
     * 
     * @param {string} cityName
     */
    addCity(cityName:string):void {
        let citiesLength = this.cities.length,
            cityId = this.cities[citiesLength - 1].id,
            newCity = new City(cityId + 1, cityName, 'onbekend');

        this.cities.push(newCity);
    }

    /**
     * deleteCity
     * Delete a city from the cities array
     * 
     * @param {number} cityId
     */
    deleteCity(cityId:number):void {
        this.cities.forEach((city, index) => {
			if (city.id === cityId) {
				this.cities.splice(index, 1);
			}
		})
    }
}