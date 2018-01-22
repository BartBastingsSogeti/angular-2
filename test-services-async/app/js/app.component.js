System.register(["angular2/core", "./services/city.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, city_service_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (city_service_1_1) {
                city_service_1 = city_service_1_1;
            }
        ],
        execute: function () {
            AppComponent = /** @class */ (function () {
                function AppComponent(cityService) {
                    this.cityService = cityService;
                    this.title = 'Test Services';
                    this.cityPhoto = '';
                    this.showCityVisible = false;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getCities();
                };
                AppComponent.prototype.getCities = function () {
                    this.cities = this.cityService.getCities();
                };
                AppComponent.prototype.getCity = function (cityId) {
                    this.city = this.cityService.getCity(Number(cityId));
                    console.log(this.city);
                };
                AppComponent.prototype.showCity = function (city) {
                    if (this.currentCity !== city) {
                        var imgUrl = '', visible = false;
                        this.currentCity = city;
                        if (this.currentCity.province !== 'onbekend') {
                            imgUrl = "img/" + this.currentCity.name + ".jpg";
                            visible = true;
                        }
                        this.showCityVisible = visible;
                        this.cityPhoto = imgUrl;
                    }
                };
                AppComponent.prototype.hideCityPhoto = function () {
                    if (this.showCityVisible) {
                        this.showCityVisible = false;
                    }
                };
                AppComponent.prototype.addCity = function (cityName) {
                    this.cityService.addCity(cityName);
                };
                AppComponent.prototype.deleteCity = function (cityId) {
                    this.cityService.deleteCity(cityId);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        templateUrl: 'app/app.component.html'
                    }),
                    __metadata("design:paramtypes", [city_service_1.CityService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map