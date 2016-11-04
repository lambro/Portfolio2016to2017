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
    controller: 'formPageController',
    templateUrl: './templates/about.html'
  });

  $routeProvider.when('/skills',{
    controller: 'formPageController',
    templateUrl: './templates/skills.html'
  });

  $routeProvider.when('/introduction/',{
    controller: 'formPageController',
    templateUrl: './templates/introduction.html',
  });

  $routeProvider.when('/experience',{
    controller: 'formPageController',
    templateUrl: './templates/experience.html'
  });

  $routeProvider.when('/education',{
    controller: 'formPageController',
    templateUrl: './templates/education.html'
  });  

  $routeProvider.when('/projects',{
    controller: 'formPageController',
    templateUrl: './templates/projects.html'
  });  

  $routeProvider.when('/contactform',{
    controller: 'formPageController',
    templateUrl: './templates/contactform.html'
  });
});