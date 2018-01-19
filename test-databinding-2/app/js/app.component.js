System.register(["angular2/core", "./model/city.model"], function (exports_1, context_1) {
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
    var core_1, city_model_1, AppComponent;
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
            AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Kantoren Sogeti';
                    this.toggleMsg = 'Vergreg lijst met kantoren';
                    this.cityPhoto = '';
                    this.newCity = '';
                    this.showCities = true;
                    this.textHidden = true;
                    this.cities = [
                        new city_model_1.City(1, 'Vianen', 'Utrecht'),
                        new city_model_1.City(2, 'Amersfoort', 'Utrecht'),
                        new city_model_1.City(3, 'Amsterdam', 'Noord-holland'),
                        new city_model_1.City(4, 'Eindhoven', 'Noord-brabant'),
                        new city_model_1.City(5, 'Groningen', 'Groningen')
                    ];
                }
                AppComponent.prototype.btnClick = function () {
                    var msg;
                    this.showCities ? msg = 'Kantoren zijn zichtbaar!' : msg = 'Kantoren zijn verborgen.';
                    alert(msg);
                };
                AppComponent.prototype.toggleHidden = function () {
                    this.textHidden = !this.textHidden;
                };
                AppComponent.prototype.toggleCities = function () {
                    this.showCities = !this.showCities;
                    this.showCities
                        ? this.toggleMsg = 'Verberg lijst met steden'
                        : this.toggleMsg = 'Toon de lijst met steden';
                };
                AppComponent.prototype.showCity = function (city) {
                    if (this.currentCity !== city) {
                        var imgUrl = '';
                        this.currentCity = city;
                        if (this.currentCity.province !== 'onbekend') {
                            console.log(this.currentCity.name);
                            imgUrl = "img/" + this.currentCity.name + ".jpg";
                        }
                        this.cityPhoto = imgUrl;
                    }
                };
                AppComponent.prototype.changeCity = function (value) {
                    this.newCity = value;
                };
                AppComponent.prototype.addCity = function (value) {
                    var newCity = new city_model_1.City(this.cities.length + 1, value, 'onbekend');
                    this.cities.push(newCity);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        templateUrl: 'app/app.component.html'
                    }),
                    __metadata("design:paramtypes", [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map