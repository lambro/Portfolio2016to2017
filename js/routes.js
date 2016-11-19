app.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/', {
    controller: 'AppController',
    templateUrl: 'templates/home.html'
  });

  $routeProvider.otherwise({
    redirectTo: './'
  });
  // $locationProvider.html5Mode(true);

  $routeProvider.when('/about',{
    controller: 'AppController',
    templateUrl: './templates/about.html'
  });

  $routeProvider.when('/experience',{
    controller: 'AppController',
    templateUrl: './templates/experience.html'
  });

  $routeProvider.when('/projects',{
    controller: 'projectsController',
    templateUrl: './templates/projects.html'
  });

  $routeProvider.when('/contactform',{
    controller: 'AppController',
    templateUrl: './templates/contactform.html'
  });
});