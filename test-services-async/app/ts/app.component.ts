// app.component.ts
import { Component } from 'angular2/core';
import { City } from './model/city.model';
import { Person } from './model/person.model';
import { CityService } from './services/city.service';
import { PersonService } from './services/person.service';
import { HTTP_PROVIDERS } from 'angular2/http';

@Component({
    selector: 'main-app',
    templateUrl : 'app/app.component.html',
    providers: [CityService, PersonService, HTTP_PROVIDERS]
})

export class AppComponent {
    title:string;
    cities:City[];
    persons:Person[];
    numRows:number[];
    selectedRows:number;

    constructor(private cityService:CityService, private personService:PersonService) {
        this.title = 'Test Services';
        this.cities = [];
        this.persons = [];
        this.numRows = [5, 10, 15, 20];
        this.selectedRows = 5;
    }

    ngOnInit(){
        this.getCities();
        this.getPersons();
    }
    
    getCities() {
        this.cityService.getCities()
            .subscribe(
                cityData => this.cities = cityData, // succes function(citydata)
                err => console.error(err), // erro function(err)
                () => console.log('Kantoren ophalen compleet.') // complete function
            )
    }

    getPersons() {
        this.personService.getPersons()
            .subscribe(
                personsData => this.persons = this.persons.concat(personsData),
                err => console.error(err),
                () => console.log('Personen ophalen compleet.')
            )
    }

    getPersonByNumRow() {
        this.personService.getPersonByNumRow(this.selectedRows)
            .subscribe(
                personData => this.persons = personData,
                err => console.error(err),
                () => console.log('Personen ophalen via select compleet.')
            )
    }

    emptyTable() {
        this.persons = [];
    }

    insertPersons() {
        this.getPersons();
    }
}