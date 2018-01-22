System.register(["angular2/platform/browser", "./app.component", "./services/city.service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, city_service_1;
    return {
        setters: [
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (city_service_1_1) {
                city_service_1 = city_service_1_1;
            }
        ],
        execute: function () {
            browser_1.bootstrap(app_component_1.AppComponent, [city_service_1.CityService]);
        }
    };
});
//# sourceMappingURL=main.js.map