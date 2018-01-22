System.register(["angular2/core", "../model/city.model"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, city_model_1, CityService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (city_model_1_1) {
                city_model_1 = city_model_1_1;
            }
        ],
        execute: function () {
            CityService = /** @class */ (function () {
                function CityService() {
                    this.cities = [
                        new city_model_1.City(1, 'Vianen', 'Utrecht'),
                        new city_model_1.City(2, 'Amersfoort', 'Utrecht'),
                        new city_model_1.City(3, 'Amsterdam', 'Noord-holland'),
                        new city_model_1.City(4, 'Eindhoven', 'Noord-brabant'),
                        new city_model_1.City(5, 'Groningen', 'Groningen')
                    ];
                }
                /**
                 * getCities
                 * Returns all citiys from the array cities;
                 *
                 * @returns {array}
                 */
                CityService.prototype.getCities = function () {
                    return this.cities;
                };
                /**
                 * getCity
                 * Returns City object with the param city id;
                 *
                 * @param {number} id
                 *
                 * @returns {City | null}
                 */
                CityService.prototype.getCity = function (id) {
                    var city = this.cities.filter(function (c) { return c.id === id; })[0];
                    if (typeof city === 'undefined') {
                        city = null;
                    }
                    return city;
                };
                /**
                 * addCity
                 * Create a new city object and ad it to the cities array
                 *
                 * @param {string} cityName
                 */
                CityService.prototype.addCity = function (cityName) {
                    var citiesLength = this.cities.length, cityId = this.cities[citiesLength - 1].id, newCity = new city_model_1.City(cityId + 1, cityName, 'onbekend');
                    this.cities.push(newCity);
                };
                /**
                 * deleteCity
                 * Delete a city from the cities array
                 *
                 * @param {number} cityId
                 */
                CityService.prototype.deleteCity = function (cityId) {
                    var _this = this;
                    this.cities.forEach(function (city, index) {
                        if (city.id === cityId) {
                            _this.cities.splice(index, 1);
                        }
                    });
                };
                CityService = __decorate([
                    core_1.Injectable()
                ], CityService);
                return CityService;
            }());
            exports_1("CityService", CityService);
        }
    };
});
//# sourceMappingURL=city.service.js.map