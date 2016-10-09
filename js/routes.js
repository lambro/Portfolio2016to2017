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
    controller: 'FormPageController',
    templateUrl: './templates/about.html'
  });

  $routeProvider.when('/skills',{
    controller: 'FormPageController',
    templateUrl: './templates/skills.html'
  });

  $routeProvider.when('/introduction/',{
    controller: 'FormPageController',
    templateUrl: './templates/introduction.html',
  });

  $routeProvider.when('/experience',{
    controller: 'FormPageController',
    templateUrl: './templates/experience.html'
  });

  $routeProvider.when('/education',{
    controller: 'FormPageController',
    templateUrl: './templates/education.html'
  });  

  $routeProvider.when('/projects',{
    controller: 'FormPageController',
    templateUrl: './templates/projects.html'
  });  

  $routeProvider.when('/contactform',{
    controller: 'FormPageController',
    templateUrl: './templates/contactform.html'
  });
});