angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../home/home.html'
        })
        .state('about', {
            url: '/about/:id',
            templateUrl: '../about/about.html',
            resolve: {
                user: function($location, $stateParams) {
                  if(localStorage.getItem('token').length > 0){
                    console.log($stateParams);
                    console.log('success');
                  } else {
                    $location.path('/');
                  }
                }
              }       
        });
});