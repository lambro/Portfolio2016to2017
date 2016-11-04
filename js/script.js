app.directive('introduction', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/introduction.html',
  };
});

app.directive('about', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/about.html'
  };
});

app.directive('skills', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/skills.html'
  };
});

app.directive('experience', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/experience.html'
  };
});

app.directive('education', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/education.html'
  };
});

app.directive('projects', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/education.html'
  };
});

app.directive('contactform', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/contactform.html'
  };
});

$(function() {
    $(window).scroll( function(){
        $('.project-card').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            bottom_of_window = bottom_of_window + 100; 
            if( bottom_of_window > bottom_of_object ){  
                $(this).animate({'opacity':'1'},300);
            }
        }); 
    });
});

