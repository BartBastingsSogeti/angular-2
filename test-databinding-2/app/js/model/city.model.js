System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var City;
    return {
        setters: [],
        execute: function () {
            // city.model.ts
            City = /** @class */ (function () {
                function City(id, name, province) {
                    this.id = id;
                    this.name = name;
                    this.province = province;
                }
                return City;
            }());
            exports_1("City", City);
        }
    };
});
//# sourceMappingURL=city.model.js.map