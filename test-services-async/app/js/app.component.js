System.register(["angular2/core", "./services/city.service", "./services/person.service", "angular2/http"], function (exports_1, context_1) {
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
    var core_1, city_service_1, person_service_1, http_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (city_service_1_1) {
                city_service_1 = city_service_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            AppComponent = /** @class */ (function () {
                function AppComponent(cityService, personService) {
                    this.cityService = cityService;
                    this.personService = personService;
                    this.title = 'Test Services';
                    this.cities = [];
                    this.persons = [];
                    this.numRows = [5, 10, 15, 20];
                    this.selectedRows = 5;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getCities();
                    this.getPersons();
                };
                AppComponent.prototype.getCities = function () {
                    var _this = this;
                    this.cityService.getCities()
                        .subscribe(function (cityData) { return _this.cities = cityData; }, // succes function(citydata)
                    function (// succes function(citydata)
                        err) { return console.error(err); }, // erro function(err)
                    function () { return console.log('Kantoren ophalen compleet.'); } // complete function
                    );
                };
                AppComponent.prototype.getPersons = function () {
                    var _this = this;
                    this.personService.getPersons()
                        .subscribe(function (personsData) { return _this.persons = _this.persons.concat(personsData); }, function (err) { return console.error(err); }, function () { return console.log('Personen ophalen compleet.'); });
                };
                AppComponent.prototype.getPersonByNumRow = function () {
                    var _this = this;
                    this.personService.getPersonByNumRow(this.selectedRows)
                        .subscribe(function (personData) { return _this.persons = personData; }, function (err) { return console.error(err); }, function () { return console.log('Personen ophalen via select compleet.'); });
                };
                AppComponent.prototype.emptyTable = function () {
                    this.persons = [];
                };
                AppComponent.prototype.insertPersons = function () {
                    this.getPersons();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        templateUrl: 'app/app.component.html',
                        providers: [city_service_1.CityService, person_service_1.PersonService, http_1.HTTP_PROVIDERS]
                    }),
                    __metadata("design:paramtypes", [city_service_1.CityService, person_service_1.PersonService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map