angular.module('main').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'App/Components/Home/home.html',
          controller: 'homeController'
      })
      .when('/about', {
          templateUrl: 'App/Components/About/about.html',
          controller: 'aboutController'
      })
      .otherwise({
          redirectTo: '/'
      });
}])

angular.module('main').controller('mainController', function ($scope) {
    $scope.message = "Main Content";
});;