import { Component } from 'angular2/core';

@Component({
    selector: 'main-app',
    templateUrl : 'app/app.component.html'
})

export class AppComponent {
    title:string;

    constructor() {
        this.title = 'Template angular 2';
    }
}