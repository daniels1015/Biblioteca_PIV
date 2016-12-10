﻿app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "/Scripts/app/home/home.template.html",
                controller: "homeController"
                //template: "<p>Hola Mundo con Angular.</p>"
            })
            .when('/editoriales', {
                templateUrl: "/Scripts/app/editorial/editorial.template.html",
                controller: "editorialController"
            })
            .when('/libros', {
                templateUrl: "/Scripts/app/libro/libro.template.html",
                controller: "libroController"
            })
            .otherwise({
                   redirectTo: '/'
                })
    }
]);