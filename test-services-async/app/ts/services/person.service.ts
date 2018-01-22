// person.service.ts
import { Injectable } from 'angular2/core';
import { Person } from '../model/person.model';
import { Http } from 'angular2/http';
import 'rxjs/Rx';

const makeUrl = (numRows) => `http://www.filltext.com/?rows=${numRows}&id={index}&fname={firstName}&lname={lastName}&email={email}`;

@Injectable()
export class PersonService {

    constructor(private http:Http) { }

    /**
     * getPersons
     */
    getPersons() {
        return this.http.get(makeUrl(20))
            .map(res => <Person[]> res.json());
    }

    /**
     * getPersonByNumRow
     * 
     * @param numRows - amount of rows
     */
    getPersonByNumRow(numRows:number) {
        return this.http.get(makeUrl(numRows))
            .map(res => <Person[]> res.json());
    }
}