// city.service.ts
import { Injectable } from 'angular2/core';
import { City } from '../model/city.model';

@Injectable()
export class CityService {

    private cities:City[] = [
        new City(1, 'Vianen', 'Utrecht'),
        new City(2, 'Amersfoort', 'Utrecht'),
        new City(3, 'Amsterdam', 'Noord-holland'),
        new City(4, 'Eindhoven', 'Noord-brabant'),
        new City(5, 'Groningen', 'Groningen')
    ];

    /**
     * getCities
     * Returns all citiys from the array cities;
     * 
     * @returns {array}
     */
    getCities():City[] {
        return this.cities;
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