var app = angular.module('issuetracker', ['ngSanitize', 'ngRoute', 'ui.bootstrap', 'angularjs-dropdown-multiselect', 'ui.tinymce'])
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/issueList.html"
        })
        .when("/newissues", {
            templateUrl: "templates/newissues.html"
        })
        .when("/labels", {
            templateUrl: "templates/labels.html"
        })
        .when("/milestones", {
            templateUrl: "templates/milestones.html"
        });
});
    