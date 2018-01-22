System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters: [],
        execute: function () {
            // person.model.ts
            Person = /** @class */ (function () {
                function Person(id, fname, lname, email) {
                    this.id = id;
                    this.fname = fname;
                    this.lname = lname;
                    this.email = email;
                }
                return Person;
            }());
            exports_1("Person", Person);
        }
    };
});
//# sourceMappingURL=person.model.js.map